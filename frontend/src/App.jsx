import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [form, setForm] = useState({ region: "us-east-1", vcpu: 4, memory_gb: 16, os: "linux", hours_per_month: 730 });
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const cheapestMonthlyPrice =

  results.length > 0 ? Math.min(...results.map(r => r.monthly_price)) : null;

  const update = (field, value) => setForm({ ...form, [field]: field === "region" || field === "os" ? value : Number(value) });

  const compare = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:8000/api/v1/compare/compute", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error("API request failed");
      const data = await response.json();
      setResults(data.results);
    } catch {
      setError("Unable to connect to backend API. Please ensure FastAPI is running on port 8000.");
    }
    setLoading(false);
  };

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Multi-cloud FinOps MVP</p>
        <h1>CloudCost Compass</h1>
        <p className="subtitle">Compare on-demand compute pricing across AWS, GCP, Azure, and OCI using region, CPU, memory, OS, and monthly runtime.</p>
      </section>
      {loading && <div className="card">Calculating best cloud pricing...</div>}
      <section className="card form-grid">
        <label>Region<select value={form.region} onChange={(e)=>update("region",e.target.value)}><option value="us-east-1">us-east-1</option></select></label>
        <label>vCPU<input type="number" value={form.vcpu} onChange={(e)=>update("vcpu",e.target.value)} /></label>
        <label>Memory GB<input type="number" value={form.memory_gb} onChange={(e)=>update("memory_gb",e.target.value)} /></label>
        <label>OS<select value={form.os} onChange={(e)=>update("os",e.target.value)}><option value="linux">Linux</option></select></label>
        <label>Hours / Month<input type="number" value={form.hours_per_month} onChange={(e)=>update("hours_per_month",e.target.value)} /></label>
        <button onClick={compare} disabled={loading}>
        {loading ? "Comparing..." : "Compare Pricing"}
        </button>
      </section>
      {error && <div className="error">{error}</div>}
      <section className="card">
        <h2>Comparison Results</h2>
        <div className="table-wrap"><table><thead><tr><th>Provider</th><th>Service</th><th>Instance</th><th>vCPU</th><th>Memory</th><th>Hourly</th><th>Monthly</th><th>Match</th></tr></thead><tbody>
          {results.length === 0 ? <tr><td colSpan="8">Run a comparison to see results.</td></tr> : results.map((r, i) => (<tr key={i} className={r.monthly_price === cheapestMonthlyPrice ? "best-row" : ""}><td>{r.provider}</td><td>{r.service}</td><td>{r.instance_type}</td><td>{r.vcpu}</td><td>{r.memory_gb} GB</td><td>${r.hourly_price}</td><td>${r.monthly_price}</td><td>{r.match_quality}{r.monthly_price === cheapestMonthlyPrice && (<span className="best-badge"> ⭐ Best Price</span>)}</td></tr>))}
        </tbody></table></div>
      </section>
    </main>
  );
}
createRoot(document.getElementById("root")).render(<App />);
