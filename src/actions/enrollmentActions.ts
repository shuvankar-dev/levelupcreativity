import { supabase } from '../lib/supabase';

export type EnrollmentData = {
  name: string;
  email: string;
  phone: string;
  track: 'ui-ux' | 'vfx';
}

export type EnrollmentResponse = {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

/**
 * Submit enrollment form data to Supabase
 */
export const submitEnrollment = async (
  enrollmentData: EnrollmentData
): Promise<EnrollmentResponse> => {
  try {
    console.log('Starting enrollment submission...', enrollmentData);

    // Validate data
    if (!enrollmentData.name || !enrollmentData.email || !enrollmentData.phone || !enrollmentData.track) {
      console.error('Validation failed: Missing required fields');
      return {
        success: false,
        message: 'All fields are required',
        error: 'VALIDATION_ERROR'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enrollmentData.email)) {
      console.error('Validation failed: Invalid email format');
      return {
        success: false,
        message: 'Please enter a valid email address',
        error: 'INVALID_EMAIL'
      };
    }

    // Validate track
    if (!['ui-ux', 'vfx'].includes(enrollmentData.track)) {
      console.error('Validation failed: Invalid track');
      return {
        success: false,
        message: 'Please select a valid track',
        error: 'INVALID_TRACK'
      };
    }

    console.log('Validation passed, inserting into Supabase...');

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('enrollments')
      .insert([
        {
          name: enrollmentData.name.trim(),
          email: enrollmentData.email.trim().toLowerCase(),
          phone: enrollmentData.phone.trim(),
          track: enrollmentData.track
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

    console.log('Enrollment successful!', data);

    return {
      success: true,
      message: 'Enrollment submitted successfully!',
      data: data
    };
  } catch (error: any) {
    console.error('Enrollment submission error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      error: error.message
    };
  }
};

/**
 * Get all enrollments (for admin dashboard)
 */
export const getAllEnrollments = async (): Promise<EnrollmentResponse> => {
  try {
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        message: 'Failed to fetch enrollments',
        error: error.message
      };
    }

    return {
      success: true,
      message: 'Enrollments fetched successfully',
      data: data
    };
  } catch (error: any) {
    console.error('Fetch enrollments error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred',
      error: error.message
    };
  }
};

/**
 * Get enrollment count (for admin dashboard)
 */
export const getEnrollmentCount = async (): Promise<number> => {
  try {
    const { count, error } = await supabase
      .from('enrollments')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Supabase error:', error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error('Get enrollment count error:', error);
    return 0;
  }
};

/**
 * Update enrollment status (for admin)
 */
export const updateEnrollmentStatus = async (
  id: string,
  status: 'pending' | 'contacted'
): Promise<EnrollmentResponse> => {
  try {
    const { data, error } = await supabase
      .from('enrollments')
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
