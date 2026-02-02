import { supabase } from '../lib/supabase';

export type FreeCourseData = {
  email: string;
  fullName: string;
  mobile: string;
  track: 'ux' | 'vfx';
}

export type FreeCourseResponse = {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

/**
 * Submit free course form data to Supabase
 */
export const submitFreeCourse = async (
  freeCourseData: FreeCourseData
): Promise<FreeCourseResponse> => {
  try {
    console.log('Starting free course submission...', freeCourseData);

    // Validate data
    if (!freeCourseData.email || !freeCourseData.fullName || !freeCourseData.mobile || !freeCourseData.track) {
      console.error('Validation failed: Missing required fields');
      return {
        success: false,
        message: 'All fields are required',
        error: 'VALIDATION_ERROR'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(freeCourseData.email)) {
      console.error('Validation failed: Invalid email format');
      return {
        success: false,
        message: 'Please enter a valid email address',
        error: 'INVALID_EMAIL'
      };
    }

    console.log('Validation passed, inserting into Supabase...');

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('free_course_leads')
      .insert([
        {
          email: freeCourseData.email.trim().toLowerCase(),
          full_name: freeCourseData.fullName.trim(),
          mobile: freeCourseData.mobile.trim(),
          track: freeCourseData.track
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        message: `Database error: ${error.message}`,
        error: error.message
      };
    }

    console.log('Free course submission successful!', data);

    return {
      success: true,
      message: 'Successfully subscribed to free course!',
      data: data
    };
  } catch (error: any) {
    console.error('Free course submission error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      error: error.message
    };
  }
};

/**
 * Get all free course leads (for admin dashboard)
 */
export const getAllFreeCourseLeads = async (): Promise<FreeCourseResponse> => {
  try {
    const { data, error } = await supabase
      .from('free_course_leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        message: 'Failed to fetch free course leads',
        error: error.message
      };
    }

    return {
      success: true,
      message: 'Free course leads fetched successfully',
      data: data
    };
  } catch (error: any) {
    console.error('Fetch free course leads error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred',
      error: error.message
    };
  }
};

/**
 * Get free course lead count (for admin dashboard)
 */
export const getFreeCourseCount = async (): Promise<number> => {
  try {
    const { count, error } = await supabase
      .from('free_course_leads')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Supabase error:', error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error('Get free course count error:', error);
    return 0;
  }
};

/**
 * Update free course lead status (for admin)
 */
export const updateFreeCourseStatus = async (
  id: string,
  status: 'pending' | 'contacted'
): Promise<FreeCourseResponse> => {
  try {
    const { data, error } = await supabase
      .from('free_course_leads')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        message: 'Failed to update status',
        error: error.message
      };
    }

    return {
      success: true,
      message: 'Status updated successfully',
      data: data
    };
  } catch (error: any) {
    console.error('Update status error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred',
      error: error.message
    };
  }
};
