import { useState, useEffect, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import './CSS/AdminBlogEditor.css';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  status: 'draft' | 'published';
  featured_image: string | null;
  created_at: string;
  updated_at: string;
}

const CATEGORIES = ['All', 'UI/UX Design', 'VFX Animation', 'Graphic Design', 'Motion Design'];

/* ───────── Toolbar for TipTap ───────── */
const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt('Enter image URL');
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const addLink = () => {
    const url = window.prompt('Enter URL');
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="admin-blog-toolbar">
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'active' : ''} title="Bold"><b>B</b></button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'active' : ''} title="Italic"><i>I</i></button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'active' : ''} title="Heading 1">H1</button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'active' : ''} title="Heading 2">H2</button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'active' : ''} title="Heading 3">H3</button>
      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'active' : ''} title="Bullet List">• List</button>
      <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'active' : ''} title="Ordered List">1. List</button>
      <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'active' : ''} title="Quote">"</button>
      <button type="button" onClick={addLink} title="Add Link">🔗</button>
      <button type="button" onClick={addImage} title="Add Image">🖼️</button>
    </div>
  );
};

/* ───────── Main Component ───────── */
const AdminBlogEditor = () => {
  const navigate = useNavigate();

  // Auth
  const [user, setUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);

  // Blog list
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [error, setError] = useState('');

  // Modal / form
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('UI/UX Design');
  const [imageMode, setImageMode] = useState<'url' | 'file'>('url');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  // TipTap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false }),
    ],
    content: '',
  });

  /* ── Auth check ── */
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthChecked(true);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  /* ── Fetch posts ── */
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const { data, error: err } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      if (err) {
        // Silently handle table not found errors during demo
        console.log('Database not ready:', err.message);
        setPosts([]);
        return;
      }
      setPosts(data ?? []);
    } catch (e: any) {
      // Suppress errors for demo - table doesn't exist yet
      console.log('Database error:', e.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authChecked && user) fetchPosts();
  }, [authChecked, user, fetchPosts]);

  /* ── Filtered posts ── */
  const filteredPosts = posts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = filterCategory === 'All' || p.category === filterCategory;
    return matchesSearch && matchesCat;
  });

  /* ── Open modal (new or edit) ── */
  const openNew = () => {
    setEditingPost(null);
    setFormTitle('');
    setFormCategory('UI/UX Design');
    setImageUrl('');
    setImageFile(null);
    setImageMode('url');
    editor?.commands.setContent('');
    setShowModal(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormTitle(post.title);
    setFormCategory(post.category);
    setImageUrl(post.featured_image ?? '');
    setImageFile(null);
    setImageMode('url');
    editor?.commands.setContent(post.content ?? '');
    setShowModal(true);
  };

  /* ── Upload image ── */
  const uploadImage = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const filePath = `${Date.now()}.${fileExt}`;
    const { error: uploadErr } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);
    if (uploadErr) { setError(uploadErr.message); return null; }
    const { data } = supabase.storage.from('blog-images').getPublicUrl(filePath);
    return data.publicUrl;
  };

  /* ── Save (create / update) ── */
  const handleSave = async (status: 'draft' | 'published') => {
    if (!formTitle.trim()) { setError('Title is required'); return; }
    const content = editor?.getHTML() ?? '';
    if (!content || content === '<p></p>') { setError('Content is required'); return; }

    setSaving(true);
    setError('');

    try {
      let finalImage = imageUrl;
      if (imageMode === 'file' && imageFile) {
        const uploaded = await uploadImage(imageFile);
        if (!uploaded) { setSaving(false); return; }
        finalImage = uploaded;
      }

      const payload = {
        title: formTitle,
        content,
        category: formCategory,
        status: status,
        featured_image: finalImage || null,
        updated_at: new Date().toISOString(),
      };

      if (editingPost) {
        const { error: err } = await supabase.from('blogs').update(payload).eq('id', editingPost.id);
        if (err) throw err;
      } else {
        const { error: err } = await supabase.from('blogs').insert([payload]);
        if (err) throw err;
      }

      setShowModal(false);
      fetchPosts();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  /* ── Delete ── */
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    try {
      const { error: err } = await supabase.from('blogs').delete().eq('id', id);
      if (err) throw err;
      fetchPosts();
    } catch (e: any) {
      setError(e.message);
    }
  };

  /* ── Logout ── */
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  /* ── Redirect if not authed ── */
  if (authChecked && !user) {
    return (
      <div className="admin-blog-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Access Denied</h2>
          <p>Please log in to access the blog editor.</p>
          <button className="admin-blog-add-btn" onClick={() => navigate('/admin')}>Go to Login</button>
        </div>
      </div>
    );
  }

  /* ────────────────── RENDER ────────────────── */
  return (
    <div className="admin-blog-page">
      {/* Header */}
      <header className="admin-blog-header">
        <div className="admin-blog-header-content">
          <div className="admin-blog-header-left">
            <button className="admin-blog-back-btn" onClick={() => navigate('/admin')}>
              ← Back
            </button>
            <h1 className="admin-blog-title">Blog Editor</h1>
          </div>
          <div className="admin-blog-header-right">
            <span className="admin-blog-user">{user?.email}</span>
            <button className="admin-blog-logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>

      <main className="admin-blog-main">
        {/* Filters */}
        <div className="admin-blog-filters">
          <div className="admin-blog-search-wrapper">
            <svg className="admin-blog-search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              className="admin-blog-search-input"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="admin-blog-filter-wrapper">
            <svg className="admin-blog-filter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            <select
              className="admin-blog-filter-select"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <button className="admin-blog-add-btn" onClick={openNew}>
            + New Blog Post
          </button>
        </div>

        {/* Posts header */}
        <div className="admin-blog-posts-header">
          <h2 className="admin-blog-posts-title">
            Posts <span style={{ color: '#6b7280', fontWeight: 400 }}>({filteredPosts.length})</span>
          </h2>
        </div>

        {/* Loading */}
        {loading && <p style={{ textAlign: 'center', color: '#6b7280' }}>Loading posts...</p>}

        {/* Empty state */}
        {!loading && filteredPosts.length === 0 && (
          <div className="admin-blog-empty">
            <svg className="admin-blog-empty-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <h3 className="admin-blog-empty-title">No blog posts yet</h3>
            <p className="admin-blog-empty-text">Create your first blog post to get started.</p>
            <button className="admin-blog-empty-btn" onClick={openNew}>Create First Post</button>
          </div>
        )}

        {/* Blog grid */}
        {!loading && filteredPosts.length > 0 && (
          <div className="admin-blog-grid">
            {filteredPosts.map((post) => (
              <div key={post.id} className="admin-blog-card">
                {post.featured_image && (
                  <img className="admin-blog-card-image" src={post.featured_image} alt={post.title} />
                )}
                <div className="admin-blog-card-content">
                  <div className="admin-blog-card-header">
                    <div className="admin-blog-card-info">
                      <h3 className="admin-blog-card-title">{post.title}</h3>
                      <div className="admin-blog-card-meta">
                        <span>{post.category}</span>
                      </div>
                      <div className="admin-blog-card-badges">
                        <span className={`admin-blog-badge ${post.status}`}>{post.status}</span>
                      </div>
                    </div>
                    <div className="admin-blog-card-actions">
                      <button className="admin-blog-action-btn edit" onClick={() => openEdit(post)} title="Edit">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      </button>
                      <button className="admin-blog-action-btn delete" onClick={() => handleDelete(post.id)} title="Delete">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                      </button>
                    </div>
                  </div>
                  <div className="admin-blog-card-date">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {new Date(post.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ───── Create / Edit Modal ───── */}
      {showModal && (
        <div className="admin-blog-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-blog-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal header */}
            <div className="admin-blog-modal-header">
              <h2 className="admin-blog-modal-title">{editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
              <button className="admin-blog-modal-close" onClick={() => setShowModal(false)}>×</button>
            </div>

            {/* Form */}
            <form className="admin-blog-form" onSubmit={(e) => { e.preventDefault(); }}>
              {error && <div className="admin-blog-error">{error}</div>}

              <div className="admin-blog-form-grid">
                {/* Left column */}
                <div className="admin-blog-form-column">
                  <div className="admin-blog-form-group">
                    <label className="admin-blog-label">Title</label>
                    <input
                      className="admin-blog-input"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="Enter blog title..."
                      required
                    />
                  </div>

                  <div className="admin-blog-form-group">
                    <label className="admin-blog-label">Category</label>
                    <select
                      className="admin-blog-select"
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                    >
                      {CATEGORIES.filter(c => c !== 'All').map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Right column */}
                <div className="admin-blog-form-column">
                  <div className="admin-blog-form-group">
                    <label className="admin-blog-label">
                      Featured Image <span className="admin-blog-label-hint">(optional)</span>
                    </label>
                    <div className="admin-blog-upload-toggle">
                      <button
                        type="button"
                        className={`admin-blog-toggle-btn ${imageMode === 'url' ? 'active' : ''}`}
                        onClick={() => setImageMode('url')}
                      >URL</button>
                      <button
                        type="button"
                        className={`admin-blog-toggle-btn ${imageMode === 'file' ? 'active' : ''}`}
                        onClick={() => setImageMode('file')}
                      >Upload</button>
                    </div>
                    {imageMode === 'url' ? (
                      <input
                        className="admin-blog-input"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                    ) : (
                      <>
                        <input
                          className="admin-blog-file-input"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                        />
                        <p className="admin-blog-file-hint">Max 5MB. JPG, PNG, or WebP recommended.</p>
                      </>
                    )}
                  </div>

                  <div className="admin-blog-info-box">
                    <h4 className="admin-blog-info-title">Tips</h4>
                    <p className="admin-blog-info-text">
                      Use the toolbar to format your content. You can add headings, bold/italic text,
                      lists, links, and images directly in the editor.
                    </p>
                  </div>
                </div>

                {/* Editor – full width */}
                <div className="admin-blog-editor-group">
                  <label className="admin-blog-label">Content</label>
                  <div className="admin-blog-editor-wrapper">
                    <MenuBar editor={editor} />
                    <div className="admin-blog-editor">
                      <EditorContent editor={editor} style={{ height: '100%', overflow: 'auto' }} />
                    </div>
                  </div>
                  <p className="admin-blog-editor-hint">Use the toolbar above to format text, add images, and insert links.</p>
                </div>
              </div>

              {/* Actions */}
              <div className="admin-blog-form-actions">
                <button type="button" className="admin-blog-draft-btn" onClick={() => handleSave('draft')} disabled={saving}>
                  {saving ? 'Saving...' : 'Save as Draft'}
                </button>
                <button type="button" className="admin-blog-submit-btn" onClick={() => handleSave('published')} disabled={saving}>
                  {saving ? 'Publishing...' : 'Publish'}
                </button>
                <button type="button" className="admin-blog-cancel-btn" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogEditor;
