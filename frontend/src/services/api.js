const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const apiService = {
  // Get business data
  async getBusinessData(businessData) {
    try {
      const response = await fetch(`${API_BASE_URL}/business-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(businessData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch business data');
      }

      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch business data. Please try again.');
    }
  },

  // Regenerate SEO headline
  async regenerateHeadline(name, location) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`
      );

      if (!response.ok) {
        throw new Error('Failed to regenerate headline');
      }

      return await response.json();
    } catch (error) {
      throw new Error('Failed to regenerate headline. Please try again.');
    }
  },
}; 