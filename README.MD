# DevelopsToday Assessment.

This is a fullstack application using **Express** for the backend and **React** with **Vite** for the frontend. Below are the steps required to initialize and test both parts.

## Project Structure

```
root/
│
├── backend/      # Backend with Express
│
└── frontend/     # Frontend with React and Vite
```

## Requirements

- Node.js (v14 or higher)
- npm or yarn

---

## Installation and Setup

### 1. Backend (Express)

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server in development mode:

   ```bash
   npm run dev
   ```

4. **Server Port:**  
   The backend runs on port `3000` by default.  
   To change the port, you can set the `PORT` environment variable.

---

#### Backend Routes

- **`GET /all-countries`**:  
  Returns the complete list of countries.

- **`GET /country-info/:countryName`**:  
  Returns detailed information about the requested country.

---

### 2. Frontend (React with Vite)

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Running and Testing

- **Backend:** Visit [http://localhost:3000](http://localhost:3000) (or the port you set).
- **Frontend:** Vite will provide the local and network URLs in the console (default is `http://localhost:5173`).
