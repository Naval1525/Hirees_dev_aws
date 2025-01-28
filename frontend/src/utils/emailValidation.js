import axios from 'axios';

// Email validation utility
export const validateEmail = async (email) => {
  // Regular expression for basic email structure validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!email) {
    return {
      isValid: false,
      error: "Email is required"
    };
  }

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: "Invalid email format"
    };
  }

  try {
    // Using abstract API for email verification
    // Note: You'll need to sign up for an API key at https://www.abstractapi.com/
    const response = await axios.get(`https://emailvalidation.abstractapi.com/v1`, {
      params: {
        api_key: '6d3d1c2b27bb4407adfee9ebe8212a10',
        email: email
      }
    });

    // Check various aspects of the email validation response
    const { is_valid_format, is_disposable_email, is_free_email, deliverability } = response.data;

    if (!is_valid_format) {
      return {
        isValid: false,
        error: "Invalid email format"
      };
    }

    if (is_disposable_email) {
      return {
        isValid: false,
        error: "Disposable email addresses are not allowed"
      };
    }

    if (deliverability === "UNDELIVERABLE") {
      return {
        isValid: false,
        error: "This email address appears to be undeliverable"
      };
    }

    return {
      isValid: true,
      error: null
    };
  } catch (error) {
    console.error('Email validation error:', error);
    // Fallback to basic validation if API call fails
    return {
      isValid: emailRegex.test(email),
      error: emailRegex.test(email) ? null : "Invalid email format"
    };
  }
};