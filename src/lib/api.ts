// API base URL - will be set via environment variable
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// API client functions
export const api = {
  // Consultation endpoints
  submitConsultation: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/consultation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit consultation');
    }
    
    return response.json();
  },

  // Contact endpoints
  submitContact: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }
    
    return response.json();
  },
}; 