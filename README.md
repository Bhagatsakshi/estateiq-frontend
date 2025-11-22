# 🏡 EstateIQ — Frontend (React + Vite)

This is the frontend web application for **EstateIQ**, a Real Estate Market Analyzer built using **React (Vite)**, **Bootstrap**, and **Recharts**.

Users can enter Pune localities (e.g., Wakad, Aundh, Akurdi) and instantly receive:

* 🧠 Smart market summary
* 📊 Price trend chart
* 📁 Market insights table
* 💾 Export table data as CSV
* 💬 Chat-style interface
* 🌙 Dark mode toggle

The backend API is built with **Django REST Framework** and hosted on Render.

---

## 🚀 Live Demo (Frontend)

👉 [https://your-frontend-link.vercel.app/](https://your-frontend-link.vercel.app/)

### 🌐 Backend API (Render)

👉 [https://estateiq-backend-s6wr.onrender.com/api/analyze/](https://estateiq-backend-s6wr.onrender.com/api/analyze/)

---

## 📦 Technologies Used

* **React (Vite)**
* **Bootstrap 5**
* **Recharts**
* **Axios**
* **React Router DOM**
* **Custom CSS for UI**

---

## ⚙️ Run Frontend Locally

### 1️⃣ Install dependencies

```sh
npm install
```

### 2️⃣ Start development server

```sh
npm run dev
```

### 3️⃣ Create production build

```sh
npm run build
```

---

## 🔌 Backend API Integration

The React app communicates with the Django backend using this API:

```js
https://estateiq-backend-s6wr.onrender.com/api/analyze/
```

Located inside the Dashboard component.

---

## 📁 Project Structure

```
src/
 ├── components/
 ├── pages/
 ├── css/
 ├── App.jsx
 ├── main.jsx
public/
index.html
vite.config.js
package.json
```

---

## 📸 Features Screenshot (Add after deployment)

* Dashboard Interface
* Summary Card
* Trend Chart
* Table + CSV Download
* Dark Mode Preview

---

## 👩‍💻 Author

**Sakshi Bhagat**
Internship Assignment — Real Estate Analytics Tool

---