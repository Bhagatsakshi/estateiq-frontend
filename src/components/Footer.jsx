import "../css/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container mb-10">
      <div className="container footer-content">
        <div className="footer-section brand-section">
          <h5 className="footer-brand">🏡 EstateIQ</h5>
          <p className="footer-desc">
            AI-powered insights for smarter real estate decisions.  
            Analyze trends, prices, and demand across Pune’s top areas.
          </p>
        </div>

        <div className="footer-section links-section">
          <h6 className="footer-heading">Quick Links</h6>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-section social-section">
          <h6 className="footer-heading">Connect</h6>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-envelope-fill"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} <span className="text-accent fw-bold">EstateIQ</span>.  
          All rights reserved. | Designed with <span className="heart">❤️</span> for smarter real estate analytics.
        </p>
      </div>
    </footer>
  );
}