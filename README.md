# 🏡 EstateIQ – Real Estate Market Analyzer (React + Django)

EstateIQ is a smart real-estate analytics chatbot that helps users analyze property trends, pricing patterns, and demand for different localities in Pune.  
Built as an internship assignment, the project uses **Django REST API** as backend and **React (Vite) + Bootstrap** for the frontend.

---

## 🚀 Live Demo

### 🔹 Frontend (Vercel)
👉 https://your-frontend-url.vercel.app/

### 🔹 Backend API (Render)
👉 https://estateiq-backend-s6wr.onrender.com/api/analyze/?query=wakad

---

## 🎯 Features

### 🧠 AI-Styled Summary  
- Generates a smart human-readable summary explaining the location’s market trend.  
- Works for both single and multi-locality queries.

### 📊 Interactive Charts  
- Visualizes year-wise price trends using Area Charts.  
- Automatically adapts to dark/light mode.

### 📁 Data Table  
- Shows property type wise breakdown:
  - Avg Price  
  - Listings Count  
  - Demand Score  

### 💾 Download CSV  
- Users can export table data with one click.

### 🌙 Dark Mode Toggle  
- Full UI adapts beautifully for dark mode users.

### 💬 Chat-Style Interface  
- Real-time conversation layout with:
  - User bubble (right)
  - Bot bubble (left)
  - Smooth scrolling

---

## 🏗️ Tech Stack

### **Frontend**
- React (Vite)
- Bootstrap 5
- Chart.js / Recharts
- Axios
- React Router
- Custom responsive UI

### **Backend**
- Django
- Django REST Framework
- Pandas
- OpenPyXL
- CORS Headers
- Gunicorn (production)
- Render hosting

---

## 🔌 API Endpoint

### **POST /api/analyze/**  
Request:
```json
{
  "query": "Analyze Wakad"
}
