import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AreaChartBox from "./AreaChartBox";
import "../css/Dashboard.css";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleSuggestedQuery = (text) => {
    setQuery(text);
    analyzeArea(text);
  };

  const analyzeArea = async (customQuery) => {
    const finalQuery = customQuery || query;
    if (!finalQuery.trim()) {
      toast.warn("Please enter an area name!");
      return;
    }

    const userMsg = { sender: "user", text: finalQuery };
    setChat((prev) => [...prev, userMsg]);
    setQuery("");
    setLoading(true);

    try {
      
      const res = await axios.post("https://estateiq-backend-s6wr.onrender.com/api/analyze/", {
        query: finalQuery,
      });

      const botMsg = {
        sender: "bot",
        text: "Here’s the analysis:",
        summary: res.data.summary,
        chartData: res.data.chart_data,
        tableData: res.data.table_data,
      };
      setChat((prev) => [...prev, botMsg]);
      toast.success("Analysis complete!");
    } catch (e) {
      toast.error("Error analyzing area. Please try again!");
      const errMsg = { sender: "bot", text: "Error analyzing area. Try again!" };
      setChat((prev) => [...prev, errMsg]);
    }
    setLoading(false);
  };

  const downloadCSV = (tableData) => {
    if (!tableData || tableData.length === 0) return;
    const headers = Object.keys(tableData[0]);
    const csvRows = [
      headers.join(","),
      ...tableData.map((row) => headers.map((h) => row[h]).join(",")),
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "real_estate_data.csv";
    link.click();
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`chat-dashboard ${darkMode ? "dark-mode" : "light-mode"}`}>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="chat-header">
        <h2>Real Estate Market Analyzer</h2>
        <div className="header-actions">
          <button className="btn btn-outline change" onClick={toggleDarkMode}>
            {darkMode ? "🌞 Light Mode" : "🌗 Dark Mode"}
          </button>
        </div>
      </div>

      <p className="chat-subtitle">
        Discover pricing trends, demand, and market health for any area in Pune.
      </p>

      {loading && (
        <div className="loading-box">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="loading-text">Analyzing your query… please wait</p>
        </div>
      )}

      <div className="chat-window">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"}`}
          >
            <div className="avatar">
              {msg.sender === "user" ? "🧑" : "🤖"}
            </div>
            <div className="message-content">
              <p>{msg.text}</p>

              {msg.sender === "bot" && msg.summary && (
                <>
                  <div className="result-card improved-summary">
                    <h5 className="summary-title">🧠 Smart Market Summary</h5>
                    <p className="summary-text">{msg.summary}</p>
                  </div>

                  {msg.chartData?.length > 0 && (
                    <div className="result-card">
                      <h5>📊 Price Trends</h5>
                      <AreaChartBox data={msg.chartData} />
                    </div>
                  )}

                  {msg.tableData?.length > 0 && (
                    <div className="result-card">
                      <h5>📁 Market Details</h5>
                      <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>Property Type</th>
                            <th>Avg Price</th>
                            <th>Listings</th>
                            <th>Demand Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {msg.tableData.map((row, i) => (
                            <tr key={i}>
                              <td>{row.type}</td>
                              <td>₹ {row.avg_price}</td>
                              <td>{row.listings}</td>
                              <td>{row.demand_score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="table-actions">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setModalData(msg.tableData);
                            setShowModal(true);
                          }}
                        >
                          View Details
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={() => downloadCSV(msg.tableData)}
                        >
                          Download CSV
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="chat-input-bar">
        <input
          type="text"
          className="form-control form-control-lg rounded-pill"
          placeholder="Type area name e.g., Wakad..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && analyzeArea()}
        />
        <button
          className="btn btn-lg btn-primary analyze-btn"
          onClick={() => analyzeArea()}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Analyzing…
            </>
          ) : (
            "Analyze"
          )}
        </button>
      </div>

      {/* Modal for detailed data */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Detailed Market Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData && (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Property Type</th>
                  <th>Avg Price</th>
                  <th>Listings</th>
                  <th>Demand Score</th>
                </tr>
              </thead>
              <tbody>
                {modalData.map((row, i) => (
                  <tr key={i}>
                    <td>{row.type}</td>
                    <td>₹ {row.avg_price}</td>
                    <td>{row.listings}</td>
                    <td>{row.demand_score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

