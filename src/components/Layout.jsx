import { useState } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const links = [
  { to: "/features", label: "Features" },
  { to: "/google-ads", label: "Google Ads integration" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/demo", label: "Product demo" },
  { to: "/pricing", label: "Pricing" },
  { to: "/data-usage", label: "Data usage" },
  { to: "/contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
  setOpen(false);
}, [pathname]);

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link to="/" className="brand">
          <span className="brand__mark" aria-hidden="true" />
          AdIntelivo
        </Link>
        <button
          className="nav__toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/demo" className="btn btn--primary">
            See the demo
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Link to="/" className="brand">
              <span className="brand__mark" aria-hidden="true" />
              AdIntelivo
            </Link>
            <p>
              Advertising intelligence and first-party reporting for marketing
              agencies. Connect authorized Google Ads accounts for reporting
              and monitor public competitor activity in one workspace.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/google-ads">Google Ads integration</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/demo">Product demo</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Legal</h4>
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/data-usage">Data usage &amp; API</Link>
            <Link to="/terms">Terms of service</Link>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} AdIntelivo. All rights reserved.</span>
          <span>
            This site shows sample data for demonstration. Google Ads is a
            trademark of Google LLC. AdIntelivo is not affiliated with or
            endorsed by Google.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
