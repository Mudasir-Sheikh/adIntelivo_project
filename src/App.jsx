import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Demo from "./pages/Demo.jsx";
import Privacy from "./pages/Privacy.jsx";
import DataUsage from "./pages/DataUsage.jsx";
import Terms from "./pages/Terms.jsx";
import { Features, HowItWorks, Pricing, About, Contact } from "./pages/Marketing.jsx";

function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1 style={{ fontSize: "2.2rem" }}>That page does not exist</h1>
        <p className="lede">Check the address, or start again from the homepage.</p>
        <Link to="/" className="btn btn--primary">Go to homepage</Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/data-usage" element={<DataUsage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
