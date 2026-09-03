import { Link } from "react-router-dom";

const metrics = [
  ["Impressions", "184,920", "+8.4%"],
  ["Clicks", "8,416", "+5.1%"],
  ["Cost", "$18,402", "vs. $20k budget"],
  ["Conversions", "327", "+12.7%"],
  ["All conversions", "361", "+10.9%"],
  ["Cost / conv.", "$56.28", "-6.7%"],
];

const campaigns = [
  ["Search | New Nissan", "Enabled", "$8,421", "3,806", "154", "$54.68"],
  ["Search | Used Vehicles", "Enabled", "$5,934", "2,641", "103", "$57.61"],
  ["Search | Service", "Enabled", "$2,912", "1,419", "58", "$50.21"],
  ["Brand | Viva Nissan", "Enabled", "$1,135", "550", "12", "$94.58"],
];

export default function GoogleAds() {
  return (
    <>
      <section className="google-hero">
        <div className="wrap google-hero__grid">
          <div>
            <span className="hero__tag">Google Ads API integration</span>
            <h1>First-party Google Ads reporting, connected with client authorization.</h1>
            <p className="lede">
              Agencies can connect Google Ads accounts they are already authorized
              to access. AdIntelivo uses the Google Ads API for reporting and
              read-only data retrieval so account performance can be reviewed next
              to — but never blended with — public competitive intelligence.
            </p>
            <div className="btn-row">
              <Link to="/demo" className="btn btn--primary">Open the product mock-up</Link>
              <Link to="/data-usage" className="btn btn--ghost">Read API data usage</Link>
            </div>
            <p className="hero__note">
              This public site uses illustrative sample data. The Google Ads API
              is not used to obtain competitors&rsquo; private account data.
            </p>
          </div>

          <div className="connect-card" aria-label="Google Ads connection mock-up">
            <div className="connect-card__top">
              <div>
                <div className="eyebrow">Connected advertising account</div>
                <h3>Viva Nissan · Google Ads</h3>
              </div>
              <span className="status status--ok">Connected</span>
            </div>
            <div className="connect-row"><span>Account</span><strong>Viva Nissan</strong></div>
            <div className="connect-row"><span>Customer ID</span><strong>•••-•••-1234</strong></div>
            <div className="connect-row"><span>Access</span><strong>Reporting / read-only operations</strong></div>
            <div className="connect-row"><span>Last sync</span><strong>4 minutes ago</strong></div>
            <div className="connect-card__foot">
              <span>Google OAuth authorization</span>
              <span>Disconnect account</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-kicker">What the API is used for</div>
          <h2>A reporting layer for accounts the agency already manages</h2>
          <p className="lede">
            The integration is designed to make client reporting and account
            monitoring easier. It is not an ad-management interface and it does
            not use the Google Ads API for competitor research.
          </p>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <div className="usecase-card">
              <span className="usecase-card__num">01</span>
              <h3>Connect authorized accounts</h3>
              <p>
                An authenticated agency user starts Google OAuth and selects an
                account the user is already permitted to access.
              </p>
            </div>
            <div className="usecase-card">
              <span className="usecase-card__num">02</span>
              <h3>Read performance</h3>
              <p>
                AdIntelivo retrieves reporting data for the connected account,
                including account and campaign structure plus performance metrics.
              </p>
            </div>
            <div className="usecase-card">
              <span className="usecase-card__num">03</span>
              <h3>Report it back</h3>
              <p>
                The agency sees first-party performance in its workspace and can
                use it in account monitoring and client reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap">
          <div className="split-head">
            <div>
              <div className="section-kicker">Product mock-up · sample data</div>
              <h2>Connected account performance</h2>
              <p className="lede">
                A representative reporting view showing how Google Ads data is
                displayed after an authorized account is connected.
              </p>
            </div>
            <span className="sample-chip">Illustrative data only</span>
          </div>

          <div className="metric-grid" style={{ marginTop: 28 }}>
            {metrics.map(([label, value, note]) => (
              <div className="metric-card" key={label}>
                <div className="metric-card__label">{label}</div>
                <div className="metric-card__value">{value}</div>
                <div className="metric-card__note">{note}</div>
              </div>
            ))}
          </div>

          <div className="tablewrap" style={{ marginTop: 22 }}>
            <table className="table api-table">
              <thead>
                <tr>
                  <th>Campaign</th>
                  <th>Status</th>
                  <th className="num">Cost</th>
                  <th className="num">Clicks</th>
                  <th className="num">Conversions</th>
                  <th className="num">Cost / conv.</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((r) => (
                  <tr key={r[0]}>
                    <td style={{ fontWeight: 600 }}>{r[0]}</td>
                    <td><span className="status status--ok">{r[1]}</span></td>
                    <td className="num">{r[2]}</td>
                    <td className="num">{r[3]}</td>
                    <td className="num">{r[4]}</td>
                    <td className="num">{r[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="microcopy">
            Depending on the reporting view enabled in the product, AdIntelivo may
            retrieve account, campaign, ad group, ad, keyword and search-term
            reporting fields. The application is designed to use reporting/read
            operations rather than mutate operations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap boundary-grid">
          <div>
            <div className="section-kicker">Clear API boundary</div>
            <h2>Google Ads data and competitor observations are separate data sources.</h2>
            <p className="lede">
              This distinction is fundamental to AdIntelivo. Private advertiser
              data comes only from an account the user authorizes. Competitor
              intelligence comes from public or separately licensed sources.
            </p>
          </div>
          <div className="boundary-card">
            <div className="boundary-row boundary-row--yes">
              <div className="boundary-icon">✓</div>
              <div>
                <strong>Google Ads API</strong>
                <span>Authorized client account reporting: structure, spend, impressions, clicks, conversions and related performance fields.</span>
              </div>
            </div>
            <div className="boundary-row boundary-row--no">
              <div className="boundary-icon">×</div>
              <div>
                <strong>Not Google Ads API</strong>
                <span>Competitor ads, competitor rankings, public landing pages, estimated market metrics and other public competitive observations.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap">
          <div className="section-kicker">Operations we do not perform</div>
          <h2>Reporting-only by product design</h2>
          <div className="grid grid--2" style={{ marginTop: 26 }}>
            <div className="policy-card">
              <h3>No campaign mutations</h3>
              <p>
                AdIntelivo does not create, edit, pause, enable or remove campaigns,
                ad groups, ads, keywords or budgets through this integration.
              </p>
            </div>
            <div className="policy-card">
              <h3>No media buying</h3>
              <p>
                AdIntelivo does not place ads, manage advertiser spend or take a
                percentage of media budget. Agencies remain responsible for all
                changes made in Google Ads.
              </p>
            </div>
            <div className="policy-card">
              <h3>No cross-customer sharing</h3>
              <p>
                One customer&rsquo;s connected Google Ads data is not shown to or
                used to provide another customer with private account information.
              </p>
            </div>
            <div className="policy-card">
              <h3>No competitor account access</h3>
              <p>
                The Google Ads API is never presented as a source of competitor
                spend, conversions, settings or other non-public competitor data.
              </p>
            </div>
          </div>
          <div className="callout" style={{ marginTop: 32 }}>
            <p>
              For the detailed collection, access, retention and deletion policy,
              read <Link to="/data-usage">Data usage &amp; API</Link> and the{" "}
              <Link to="/privacy">Privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
