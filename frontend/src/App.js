import React from 'react';
import './App.css';
import { Header, BusinessForm, BusinessDashboard } from './components';
import { BusinessProvider, useBusiness } from './context/BusinessContext';
import { apiService } from './services/api';

// Main app content wrapped in context
const AppContent = () => {
  const {
    formData,
    setBusinessData,
    setLoading,
    setError,
    clearError
  } = useBusiness();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    clearError();

    try {
      const data = await apiService.getBusinessData(formData);
      setBusinessData(data);
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <BusinessForm onSubmit={handleFormSubmit} />
        
        <BusinessDashboard />
      </div>
    </div>
  );
};

// Main App component with context provider
function App() {
  return (
    <BusinessProvider>
      <AppContent />
    </BusinessProvider>
  );
}

export default App;
