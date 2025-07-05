# Components Structure

This directory contains all the React components for the GrowthProAI Dashboard application.

## Component Overview

### `Header.js`
- **Purpose**: Application header with title and description
- **Props**: None
- **Features**: Static header component

### `BusinessForm.js`
- **Purpose**: Form for entering business name and location
- **Props**:
  - `formData`: Current form state
  - `onInputChange`: Handler for input changes
  - `onSubmit`: Handler for form submission
  - `loading`: Loading state
  - `error`: Error message to display
- **Features**: Form validation, error handling, responsive design

### `BusinessDashboard.js`
- **Purpose**: Displays business metrics and SEO headline
- **Props**:
  - `businessData`: Business data from API
  - `onRegenerateHeadline`: Handler for regenerating headline
  - `loading`: Loading state
  - `formData`: Current form data
- **Features**: Metrics display, headline regeneration, responsive grid

## Usage

```jsx
import { Header, BusinessForm, BusinessDashboard } from './components';

// In your main component
<Header />
<BusinessForm 
  formData={formData}
  onInputChange={handleInputChange}
  onSubmit={handleSubmit}
  loading={loading}
  error={error}
/>
<BusinessDashboard 
  businessData={businessData}
  onRegenerateHeadline={handleRegenerateHeadline}
  loading={loading}
  formData={formData}
/>
```

## Benefits

- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Components can be easily reused or modified
- **Maintainability**: Easier to debug and update individual components
- **Testing**: Each component can be tested independently
- **Code Organization**: Clean, structured codebase 