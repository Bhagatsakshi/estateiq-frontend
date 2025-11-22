import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <br /> */}
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
