import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className={`hero-container ${darkMode ? "dark" : ""}`}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-center">
        <h1 className="hero-title fw-bold mb-3">
          Welcome to <span>EstateIQ</span>
        </h1>
        <p className="hero-subtitle lead mb-4">
          Your AI-powered real estate assistant — explore property trends, pricing insights, 
          and market health across Pune with just a few clicks.
        </p>

        <Link to="/dashboard">
          <button className="btn btn-lg btn-success rounded-pill shadow-sm px-4 py-2">
            Start Chatting
          </button>
        </Link>
      </div>
    </div>
  );
}