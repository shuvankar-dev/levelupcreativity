import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import './CSS/Blog.css';

const Blog: React.FC = () => {
  const [email, setEmail] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing email:', email);
      // Add your subscription logic here
      setEmail('');
    }
  };

  const blogPosts = [
    {
      id: 1,
      image: '/src/assets/Blog/1.png',
      title: 'The Evolution of Design Thinking: Insights',
      level: 'Advanced',
      readTime: '4 mins',
      category: 'UI/UX Design'
    },
    {
      id: 2,
      image: '/src/assets/Blog/2.png',
      title: 'Mastering the art of Design Tools',
      level: 'Beginner',
      readTime: '4 mins',
      category: 'VFX Animation'
    },
    {
      id: 3,
      image: '/src/assets/Blog/3.png',
      title: 'Side Projects: From Passion to Portfolio',
      level: 'Intermediate',
      readTime: '4 mins',
      category: 'UI/UX Design'
    },
    {
      id: 4,
      image: '/src/assets/Blog/4.png',
      title: 'Streamlining Design Workflows With Design Systems',
      level: 'Intermediate',
      readTime: '4 mins',
      category: 'UI/UX Design'
    },
    {
      id: 5,
      image: '/src/assets/Blog/5.png',
      title: 'Building An Effective Design System- Best Practices',
      level: 'Intermediate',
      readTime: '4 mins',
      category: 'Graphic Design'
    },
    {
      id: 6,
      image: '/src/assets/Blog/6.png',
      title: 'How Side Projects Fuel Personal Growth',
      level: 'Beginner',
      readTime: '4 mins',
      category: 'Motion Design'
    },
    {
      id: 7,
      image: '/src/assets/Blog/7.png',
      title: 'Design Tools Every Digital Product Designer Should Know',
      level: 'Beginner',
      readTime: '4 mins',
      category: 'UI/UX Design'
    },
    {
      id: 8,
      image: '/src/assets/Blog/8.png',
      title: 'Designing For User Delights- A Complete Study',
      level: 'Intermediate',
      readTime: '4 mins',
      category: 'UI/UX Design'
    }
  ];

  return (
    <div className="blog-page">
      <Navbar />
      
      <main className="blog-main">
        <div className="blog-container">
          {/* Hero Section */}
          <section className="blog-hero">
            <div className="blog-hero-content">
              <h1 className="blog-hero-title">
                Explore Our Blogs Across Design Disciplines
              </h1>
              
              {/* Email Subscription Box */}
              <div className="blog-subscribe-box">
                <div className="blog-subscribe-input-wrapper">
                  <div className="blog-subscribe-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M4 8L14 15L24 8M4 8V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H22C22.5304 22 23.0391 21.7893 23.4142 21.4142C23.7893 21.0391 24 20.5304 24 20V8M4 8L14 2L24 8" stroke="#6F677E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="blog-subscribe-input"
                  />
                </div>
                <button 
                  className="blog-subscribe-btn"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* Blog Posts Section - Frame 1148 */}
          <section className="blog-posts-section">
            {/* Filter Tabs - Frame 1138 */}
            <div className="blog-filter-tabs">
              {['All', 'UI/UX Design', 'VFX Animation', 'Graphic Design', 'Motion Design'].map((filter) => (
                <button
                  key={filter}
                  className={`blog-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Blog Grid - Frame 1144 */}
            <div className="blog-posts-grid">
              {/* Row 1 - Frame 1145 */}
              <div className="blog-row">
                {blogPosts.slice(0, 3).map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <div className="blog-card-meta">
                      <span className="blog-card-level">{post.level}</span>
                      <span className="blog-card-dot"></span>
                      <span className="blog-card-time">{post.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Row 2 - Frame 1146 */}
              <div className="blog-row">
                {blogPosts.slice(3, 6).map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <div className="blog-card-meta">
                      <span className="blog-card-level">{post.level}</span>
                      <span className="blog-card-dot"></span>
                      <span className="blog-card-time">{post.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Row 3 - Frame 1147 */}
              <div className="blog-row blog-row-last">
                {blogPosts.slice(6, 8).map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <div className="blog-card-meta">
                      <span className="blog-card-level">{post.level}</span>
                      <span className="blog-card-dot"></span>
                      <span className="blog-card-time">{post.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Blog;
