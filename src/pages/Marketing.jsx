import { useState } from "react";
import { Link } from "react-router-dom";

function PageHead({ title, sub }) {
  return (
    <section className="pagehead">
      <div className="wrap">
        <h1 style={{ fontSize: "clamp(2rem,4vw,2.9rem)" }}>{title}</h1>
        <p>{sub}</p>
      </div>
    </section>
  );
}

const features = [
  ["Google Ads reporting", "Connect an authorized client Google Ads account and review first-party account and campaign performance in the agency workspace. The integration is reporting-only by product design."],
  ["Competitor discovery", "Name the client and the market. AdIntelivo identifies the businesses genuinely competing for the same searches and drops the ones that only look similar on paper."],
  ["Ad copy capture", "Headlines, descriptions, sitelinks and callouts, stored with first-seen and last-seen dates so you can show a client exactly when an offer changed."],
  ["Creative grouping", "Dozens of near-identical variants collapse into a handful of distinct messages, so review takes minutes."],
  ["Rank comparison", "Organic position, map pack position and paid presence for your client and each competitor, on the same keyword list."],
  ["Keyword gaps", "Queries where a competitor is visible and your client is not, sorted by volume and cost per click."],
  ["Landing page tracking", "The page behind each ad is captured too — offer, form fields and hero copy — so you see the full funnel, not just the headline."],
  ["Alerts", "New entrant, brand-term bidding, offer change, rank drop, page change. Delivered to email or Slack."],
  ["Client-ready reports", "A weekly brief and a monthly PDF, written in plain language, branded to your agency."],
  ["Multi-account portfolio", "One view across every account you manage, with health scores so you know which client needs attention first."],
];

export function Features() {
  return (
    <>
      <PageHead
        title="Everything in one workspace"
        sub="First-party Google Ads reporting and competitive intelligence in one agency workspace, with the source of every data point kept clear."
      />
      <section className="section">
        <div className="wrap grid grid--3">
          {features.map(([h, p]) => (
            <div className="feature" key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const steps = [
  ["Add the client", "Enter the client business name, website and market. Competitive monitoring can be configured without installing code on the client website."],
  ["Connect Google Ads when needed", "An authorized agency user can use Google OAuth to connect a client account the agency already has permission to access. AdIntelivo uses that connection for reporting/read operations only."],
  ["Confirm competitors", "AdIntelivo proposes the businesses competing for the same searches. You approve, remove or add your own. Most agencies adjust one or two."],
  ["Daily collection runs", "Once a day the tracked keyword set is observed across desktop and mobile. Ads, ranks and landing pages are recorded and compared against yesterday."],
  ["Changes become alerts", "A new advertiser, a changed offer, a rank drop or a brand-term hijack raises an alert in the app and in Slack or email."],
  ["Reports go to the client", "The weekly brief and monthly PDF are generated from the same data, branded to your agency, ready to send or edit."],
];

export function HowItWorks() {
  return (
    <>
      <PageHead
        title="How AdIntelivo works"
        sub="Combine authorized first-party Google Ads reporting with separately sourced competitive intelligence."
      />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          {steps.map(([h, p], i) => (
            <div className="step" key={h}>
              <div className="step__n">{i + 1}</div>
              <div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
          <div className="callout" style={{ marginTop: 32 }}>
            <p>
              Where an agency connects a client&rsquo;s own advertising account,
              that first-party performance data is shown separately from
              observed competitor activity. The two are never blended into one
              number. See <Link to="/data-usage">Data usage &amp; API</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const plans = [
  {
    name: "Starter",
    price: "$199",
    note: "Up to 5 client accounts",
    featured: false,
    items: ["5 accounts", "5 competitors per account", "Daily collection", "Weekly brief", "Email alerts", "1 team seat"],
  },
  {
    name: "Growth",
    price: "$299",
    note: "Up to 15 client accounts",
    featured: true,
    items: ["15 accounts", "10 competitors per account", "Daily collection", "Weekly brief + monthly PDF", "Email and Slack alerts", "5 team seats", "Agency branding on reports"],
  },
  {
    name: "Agency",
    price: "$499",
    note: "Up to 50 client accounts",
    featured: false,
    items: ["50 accounts", "Unlimited competitors", "Daily collection", "All reports, white labelled", "Email and Slack alerts", "Unlimited seats", "Prospect audit reports", "Priority support"],
  },
];

export function Pricing() {
  return (
    <>
      <PageHead
        title="Pricing"
        sub="One monthly price per agency. Every plan includes daily collection and client-ready reporting. Invoiced monthly, cancel any time."
      />
      <section className="section">
        <div className="wrap grid grid--3">
          {plans.map((p) => (
            <div className={`plan ${p.featured ? "plan--featured" : ""}`} key={p.name}>
              <h3>{p.name}</h3>
              <div className="plan__price">
                {p.price} <span>/ month</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--ink-faint)", margin: "4px 0 0" }}>
                {p.note}
              </p>
              <ul>
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <Link to="/contact" className={`btn ${p.featured ? "btn--primary" : "btn--ghost"}`}>
                Talk to us
              </Link>
            </div>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 40 }}>
          <div className="callout">
            <p>
              Pricing is charged to the agency, not to the agency&rsquo;s clients.
              AdIntelivo does not resell advertising, does not manage spend and
              does not take a percentage of media budget.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function About() {
  return (
    <>
      <PageHead
        title="About AdIntelivo"
        sub="A software product for marketing agencies that manage paid search for local businesses."
      />
      <section className="section">
        <div className="wrap prose">
          <h2>What we do</h2>
          <p>
            AdIntelivo is a subscription software product for marketing agencies.
            Agencies can connect Google Ads accounts they are authorized to access
            for first-party reporting, and separately monitor public competitive
            activity in the same workspace. The product keeps those sources distinct
            so client performance is never confused with competitor observations.
          </p>

          <h2>Our business model</h2>
          <p>
            We charge a flat monthly subscription fee to the agency, between $199
            and $499 per month depending on the number of client accounts
            covered. We do not sell advertising, do not act as a reseller, do not
            manage client budgets and do not earn commission on media spend. Our
            only revenue is the subscription fee.
          </p>

          <h2>Who it is for</h2>
          <p>
            Small and mid-sized agencies managing between five and one hundred
            local accounts — automotive dealer groups, credit unions, medical and
            aesthetic practices, home services, legal, and retail. These teams
            typically have no dedicated competitive research function, and the
            work is done manually in spreadsheets today.
          </p>

          <h2>How we handle data</h2>
          <p>
            We collect publicly visible search results, publicly visible ad
            creatives and publicly reachable landing pages for competitive
            intelligence. Separately, where an agency chooses to connect a
            client&rsquo;s own Google Ads account, AdIntelivo uses reporting/read
            operations to display that account&rsquo;s first-party performance back
            to the authorized agency workspace. It is not used to access
            competitors&rsquo; private Google Ads data. The full detail is on the{" "}
            <Link to="/data-usage">Data usage &amp; API</Link> page.
          </p>

          <h2>Contact</h2>
          <p>
            General enquiries: hello@adintelivo.com
            <br />
            Privacy and data requests: privacy@adintelivo.com
            <br />
            API and developer contact: api@adintelivo.com
          </p>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", agency: "", accounts: "1-5", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <PageHead
        title="Contact"
        sub="Tell us about your agency and we will set up a walkthrough with your own accounts."
      />
      <section className="section">
        <div className="wrap grid grid--2">
          <div>
            {sent ? (
              <div className="card">
                <h3>Message received</h3>
                <p>
                  This demo site has no backend, so nothing was actually sent.
                  In the live product this reaches the team and gets a reply
                  within one business day.
                </p>
                <button className="btn btn--ghost" style={{ marginTop: 16 }} onClick={() => setSent(false)}>
                  Write another
                </button>
              </div>
            ) : (
              <div>
                <div className="field">
                  <label htmlFor="n">Your name</label>
                  <input id="n" value={form.name} onChange={set("name")} placeholder="Alex Moreno" />
                </div>
                <div className="field">
                  <label htmlFor="e">Work email</label>
                  <input id="e" type="email" value={form.email} onChange={set("email")} placeholder="alex@agency.com" />
                </div>
                <div className="field">
                  <label htmlFor="a">Agency name</label>
                  <input id="a" value={form.agency} onChange={set("agency")} placeholder="Addabee Inc" />
                </div>
                <div className="field">
                  <label htmlFor="c">Client accounts you manage</label>
                  <select id="c" value={form.accounts} onChange={set("accounts")}>
                    <option>1-5</option>
                    <option>6-15</option>
                    <option>16-50</option>
                    <option>50+</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="m">What are you trying to solve?</label>
                  <textarea id="m" value={form.message} onChange={set("message")} placeholder="We manage 12 dealer accounts and spend every Monday screenshotting competitor ads by hand." />
                </div>
                <button className="btn btn--primary" onClick={() => setSent(true)}>
                  Send message
                </button>
                <p className="formnote" style={{ marginTop: 12 }}>
                  Demonstration form. Nothing is transmitted or stored.
                </p>
              </div>
            )}
          </div>
          <div>
            <div className="card">
              <h3>Direct contacts</h3>
              <p style={{ marginTop: 10 }}>
                Sales and general — hello@adintelivo.com
                <br />
                Support — support@adintelivo.com
                <br />
                Privacy and data requests — privacy@adintelivo.com
                <br />
                API and developer contact — api@adintelivo.com
              </p>
            </div>
            <div className="card" style={{ marginTop: 20 }}>
              <h3>Data requests</h3>
              <p style={{ marginTop: 10 }}>
                To access, correct or delete data held about you or your agency,
                email privacy@adintelivo.com. We respond within 30 days. See the{" "}
                <Link to="/privacy">privacy policy</Link> for what we hold.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { PageHead };
