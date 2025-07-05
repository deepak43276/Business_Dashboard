import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import { validateOnChange, validateForm } from '../utils/validation';
import LoadingSpinner from './LoadingSpinner';

const BusinessForm = ({ onSubmit }) => {
  const {
    formData,
    loading,
    error,
    formErrors,
    setFormData,
    setFormErrors,
    clearError
  } = useBusiness();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData({ [name]: value });
    
    // Clear previous errors
    clearError();
    
    // Real-time validation
    const validation = validateOnChange(name, value);
    if (!validation.isValid) {
      setFormErrors({ [name]: validation.message });
    } else {
      setFormErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    clearError();
    
    // Validate form
    const { isValid, errors } = validateForm(formData);
    
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    
    // Form is valid, proceed with submission
    if (onSubmit) {
      onSubmit(e);
    }
  };



  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Business Information
      </h2>
      

      
      {loading && (
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <LoadingSpinner text="Fetching business data..." />
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                formErrors.name 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-300'
              }`}
              placeholder="e.g., Cake & Co"
              disabled={loading}
            />
            {formErrors.name && (
              <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                formErrors.location 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-300'
              }`}
              placeholder="e.g., Mumbai"
              disabled={loading}
            />
            {formErrors.location && (
              <p className="mt-1 text-sm text-red-600">{formErrors.location}</p>
            )}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <LoadingSpinner size="sm" text="" />
              <span>Loading...</span>
            </div>
          ) : (
            'Get Business Data'
          )}
        </button>
      </form>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default BusinessForm; 