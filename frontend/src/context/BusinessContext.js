import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  formData: {
    name: '',
    location: ''
  },
  businessData: null,
  loading: false,
  error: '',
  formErrors: {}
};

// Action types
const ACTIONS = {
  SET_FORM_DATA: 'SET_FORM_DATA',
  SET_BUSINESS_DATA: 'SET_BUSINESS_DATA',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_FORM_ERRORS: 'SET_FORM_ERRORS',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESET_STATE: 'RESET_STATE'
};

// Reducer function
const businessReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FORM_DATA:
      return {
        ...state,
        formData: { ...state.formData, ...action.payload }
      };
    
    case ACTIONS.SET_BUSINESS_DATA:
      return {
        ...state,
        businessData: action.payload,
        error: ''
      };
    
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    
    case ACTIONS.SET_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload
      };
    
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: '',
        formErrors: {}
      };
    
    case ACTIONS.RESET_STATE:
      return {
        ...initialState
      };
    
    default:
      return state;
  }
};

// Create context
const BusinessContext = createContext();

// Provider component
export const BusinessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(businessReducer, initialState);

  // Actions
  const setFormData = (data) => {
    dispatch({ type: ACTIONS.SET_FORM_DATA, payload: data });
  };

  const setBusinessData = (data) => {
    dispatch({ type: ACTIONS.SET_BUSINESS_DATA, payload: data });
  };

  const setLoading = (loading) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: ACTIONS.SET_ERROR, payload: error });
  };

  const setFormErrors = (errors) => {
    dispatch({ type: ACTIONS.SET_FORM_ERRORS, payload: errors });
  };

  const clearError = () => {
    dispatch({ type: ACTIONS.CLEAR_ERROR });
  };

  const resetState = () => {
    dispatch({ type: ACTIONS.RESET_STATE });
  };

  const value = {
    ...state,
    setFormData,
    setBusinessData,
    setLoading,
    setError,
    setFormErrors,
    clearError,
    resetState
  };

  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  );
};

// Custom hook to use the context
export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
}; 