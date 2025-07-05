import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import { apiService } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

const BusinessDashboard = () => {
  const {
    businessData,
    loading,
    formData,
    setBusinessData,
    setLoading,
    setError
  } = useBusiness();

  const handleRegenerateHeadline = async () => {
    if (!businessData) return;

    setLoading(true);
    try {
      const data = await apiService.regenerateHeadline(formData.name, formData.location);
      setBusinessData({
        ...businessData,
        headline: data.headline
      });
    } catch (err) {
      setError('Failed to regenerate headline. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!businessData) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Business Dashboard
      </h2>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-500 mb-2">
            ⭐ {businessData.rating}
          </div>
          <div className="text-sm text-gray-600">Google Rating</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {businessData.reviews}
          </div>
          <div className="text-sm text-gray-600">Number of Reviews</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            📈
          </div>
          <div className="text-sm text-gray-600">SEO Performance</div>
        </div>
      </div>
      
      {/* SEO Headline Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Latest AI-Generated SEO Headline
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-gray-800 italic">"{businessData.headline}"</p>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-4">
            <LoadingSpinner text="Regenerating headline..." />
          </div>
        ) : (
          <button
            onClick={handleRegenerateHeadline}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Regenerate SEO Headline
          </button>
        )}
      </div>
    </div>
  );
};

export default BusinessDashboard; 