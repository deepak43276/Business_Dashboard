# GrowthProAI – Full Stack Intern Assignment

##  Objective
Build a Mini Local Business Dashboard that simulates how small businesses might view their SEO content and Google Business data.

---

##  Features
- **Frontend:** React + Tailwind CSS (using Tailwind CLI)
- **Backend:** Node.js + Express (no database, simulated data)
- **Responsive UI:** Clean, mobile-friendly, and modern
- **API Integration:** Fetches and regenerates SEO headlines
- **Bonus:** Loading spinner, context-based state management, form validation

---

##  Project Structure
```
GrowthPro_AI/
├── backend/           # Node.js + Express API
│   ├── index.js      # Main server file
│   └── package.json  # Backend dependencies
├── frontend/          # React + Tailwind CSS
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # React Context
│   │   ├── services/      # API services
│   │   ├── utils/         # Validation utilities
│   │   ├── App.js         # Main app component
│   │   ├── input.css      # Tailwind CSS import
│   │   └── output.css     # Compiled CSS (generated)
│   ├── public/
│   └── package.json       # Frontend dependencies
├── README.md              # This file
└── .gitignore
```

---

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Step 1: Clone the Repository
```bash
git clone <your-repository-url>
cd GrowthPro_AI
```

### Step 2: Backend Setup
```bash
cd backend
npm install
npm start
```
**Backend will run on:** [http://localhost:5000]

### Step 3: Frontend Setup
```bash
cd frontend
npm install
```

### Step 4: Start Tailwind CSS Compilation
```bash
# In the frontend directory, run:
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### Step 5: Start React Development Server
```bash
# In a new terminal, from the frontend directory:
npm start
```
**Frontend will run on:** [http://localhost:3000]

---

## 🎮 Usage

1. **Open your browser** and go to [http://localhost:3000]
2. **Enter business information:**
   - Business Name (e.g., "Cake & Co")
   - Location (e.g., "Mumbai")
3. **Click "Get Business Data"** to see:
   - Simulated Google Rating (⭐ 4.3)
   - Number of Reviews (127)
   - AI-generated SEO Headline
4. **Click "Regenerate SEO Headline"** to get a new headline

---

## 🔧 API Endpoints

### POST /business-data
**Request:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```
**Response:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

### GET /regenerate-headline
**Request:** `GET /regenerate-headline?name=Cake%20%26%20Co&location=Mumbai`
**Response:**
```json
{
  "headline": "Discover the Magic of Cake & Co in Mumbai"
}
```

---

## 🎨 Features Implemented

### ✅ Core Requirements
- [x] Input form with business name and location
- [x] Display card with Google rating, reviews, and SEO headline
- [x] "Regenerate SEO Headline" button
- [x] Responsive design with Tailwind CSS
- [x] Backend API endpoints

### ✅ Bonus Features
- [x] **Loading Spinner:** Visual feedback during API calls
- [x] **React Context:** Professional state management
- [x] **Form Validation:** Real-time and on-submit validation
- [x] **Error Handling:** User-friendly error messages
- [x] **Modern UI:** Clean, professional design

---



## 📦 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project:
   ```bash
   cd frontend
   npx tailwindcss -i ./src/input.css -o ./src/output.css
   npm run build
   ```
2. Deploy the `build` folder

### Backend Deployment (Render/Glitch)
1. Set environment variables if needed
2. Deploy the `backend` folder
3. Update frontend API URLs to production

---

## 🏗️ Technical Stack

- **Frontend:** React 19, Tailwind CSS, React Context
- **Backend:** Node.js, Express, CORS
- **Build Tools:** Tailwind CLI, Create React App
- **State Management:** React Context with useReducer
- **Validation:** Custom validation utilities

---

## 📝 License
This project is created for the GrowthProAI Full Stack Intern Assignment.

---
