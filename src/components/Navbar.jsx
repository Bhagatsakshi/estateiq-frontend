import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container navbar-inner">
        
        <Link className="navbar-brand fw-semibold" to="/">
          <span className="brand-icon">🏡</span> EstateIQ
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse desktop-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
