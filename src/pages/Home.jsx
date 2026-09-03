import { Link } from "react-router-dom";
import { rankBoard, competitorAds } from "../data/demo";

function rankPill(v) {
  if (v === null) return <span className="pill pill--none">—</span>;
  const cls = v <= 3 ? "pill--top" : v <= 10 ? "pill--mid" : "pill--low";
  return <span className={`pill ${cls}`}>{v}</span>;
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <span className="hero__tag">Advertising intelligence for agencies</span>
            <h1>See your client&rsquo;s Google Ads performance — and the market around it.</h1>
            <p className="lede">
              AdIntelivo gives agencies one workspace for first-party Google Ads
              reporting and public competitive intelligence. Connect accounts the
              agency is authorized to access, review campaign performance, and
              separately track the ads and rankings competitors show in public search.
            </p>
            <div className="btn-row">
              <Link to="/google-ads" className="btn btn--primary">
                See the Google Ads integration
              </Link>
              <Link to="/demo" className="btn btn--ghost">
                Open product demo
              </Link>
            </div>
            <p className="hero__note">
              Google Ads account data is accessed only after user authorization.
              Competitor intelligence does not come from competitors&rsquo; private
              Google Ads accounts. Sample data shown on this public site.
            </p>
          </div>

          <div className="home-stack">
            <div className="mini-account-card">
              <div className="mini-account-card__top">
                <div>
                  <div className="eyebrow">Authorized Google Ads account</div>
                  <strong>Viva Nissan</strong>
                </div>
                <span className="status status--ok">Connected</span>
              </div>
              <div className="mini-metrics">
                <div><span>Cost</span><strong>$18.4k</strong></div>
                <div><span>Clicks</span><strong>8,416</strong></div>
                <div><span>Conversions</span><strong>327</strong></div>
              </div>
              <div className="mini-account-card__note">Reporting / read-only product use</div>
            </div>

            <div className="board">
              <div className="board__head">
                <span className="board__dot" aria-hidden="true" />
                Public market view · El Paso, TX
                <span className="board__stamp">sample</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th>You</th>
                    <th>Casa</th>
                    <th>Charlie C.</th>
                    <th>Fox T.</th>
                    <th>Ads</th>
                  </tr>
                </thead>
                <tbody>
                  {rankBoard.map((r) => (
                    <tr key={r.keyword}>
                      <td>
                        <div className="kw">{r.keyword}</div>
                        <div className="vol">{r.volume}/mo</div>
                      </td>
                      <td>{rankPill(r.you)}</td>
                      <td>{rankPill(r.a)}</td>
                      <td>{rankPill(r.b)}</td>
                      <td>{rankPill(r.c)}</td>
                      <td><span className="pill pill--ad">{r.ads}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section api-strip-section">
        <div className="wrap">
          <div className="api-strip">
            <div>
              <span className="api-strip__label">Google Ads API use case</span>
              <h2>Authorized, first-party reporting only.</h2>
              <p>
                The Google Ads API is used to retrieve reporting data for Google
                Ads accounts the agency already manages. AdIntelivo does not use
                it to retrieve competitors&rsquo; private spend, conversions or settings.
              </p>
            </div>
            <Link to="/google-ads" className="btn btn--ghost">View integration details</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Two data sources. One agency workspace.</h2>
          <p className="lede">
            The client&rsquo;s own advertising performance and public competitor
            observations answer different questions, so AdIntelivo keeps them
            clearly separated in the product and in reporting.
          </p>
          <div className="grid grid--2" style={{ marginTop: 34 }}>
            <div className="source-card source-card--first">
              <div className="source-card__tag">FIRST-PARTY</div>
              <h3>Connected Google Ads reporting</h3>
              <p>
                Account and campaign reporting for client accounts connected by an
                authorized user through Google OAuth. Used for spend, impressions,
                clicks, conversions and related reporting views.
              </p>
              <Link to="/google-ads">See exactly how the API is used →</Link>
            </div>
            <div className="source-card">
              <div className="source-card__tag">PUBLIC MARKET DATA</div>
              <h3>Competitor intelligence</h3>
              <p>
                Publicly observed competitor ads, rankings and landing pages plus
                licensed market metrics. This data is collected separately and is
                not represented as private Google Ads account data.
              </p>
              <Link to="/features">See competitive intelligence features →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap">
          <h2>The questions agencies need answered</h2>
          <div className="grid grid--3" style={{ marginTop: 34 }}>
            <div className="feature">
              <h3>How is my client performing?</h3>
              <p>
                Review connected-account reporting without switching between
                separate client interfaces and spreadsheets.
              </p>
            </div>
            <div className="feature">
              <h3>Who is competing in the market?</h3>
              <p>
                Identify businesses appearing for the same searches and track
                their publicly visible ad messages and search visibility.
              </p>
            </div>
            <div className="feature">
              <h3>What changed?</h3>
              <p>
                Bring performance movements and observed market changes into the
                same agency workflow while preserving the source of each data point.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Competitor ads, as publicly observed</h2>
          <p className="lede">
            Sample creative observations for one market. These examples are not
            sourced from competitors&rsquo; Google Ads accounts.
          </p>
          <div className="grid grid--2" style={{ marginTop: 30 }}>
            {competitorAds.map((ad) => (
              <div className="adcard" key={ad.domain}>
                <div className="adcard__dom">Ad · {ad.domain} · {ad.position}</div>
                <div className="adcard__title">{ad.title}</div>
                <p className="adcard__body">{ad.body}</p>
                <div className="adcard__meta">
                  First seen {ad.firstSeen} · last seen {ad.lastSeen} · {ad.variants} creative variants grouped
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap center">
          <h2>Review the complete product flow</h2>
          <p className="lede">
            The public demo uses sample data to show both connected-account
            reporting and competitive intelligence without accessing any live
            advertiser account.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link to="/demo" className="btn btn--primary">Open the product demo</Link>
            <Link to="/data-usage" className="btn btn--ghost">Read data usage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
