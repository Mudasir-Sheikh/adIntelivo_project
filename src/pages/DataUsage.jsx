import { Link } from "react-router-dom";

export default function DataUsage() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <h1 style={{ fontSize: "clamp(2rem,4vw,2.9rem)" }}>Data usage &amp; Google Ads API</h1>
          <p>
            A plain-language description of AdIntelivo&rsquo;s business model,
            Google Ads API use case, data separation and customer controls.
          </p>
          <p className="updated">Last updated 3 September 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <div className="callout">
            <p>
              <strong>Google Ads API purpose:</strong> AdIntelivo uses the Google Ads
              API to provide reporting for Google Ads accounts that an authenticated
              agency user is already authorized to access. The integration is
              reporting-only by product design and is not used to retrieve private
              competitor account data.
            </p>
          </div>

          <h2>1. Business model</h2>
          <p>
            AdIntelivo is subscription software for marketing agencies. Agencies
            use the product to review first-party advertising performance for
            connected client accounts and to monitor separately sourced competitive
            activity in the markets those clients serve.
          </p>
          <p>
            AdIntelivo charges the agency a software subscription. We do not resell
            Google Ads inventory, act as a media buyer, take a percentage of client
            ad spend, or sell connected Google Ads data to third parties.
          </p>

          <h2>2. Two separate categories of data</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Source</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First-party Google Ads data</td>
                <td>A Google Ads account connected by an authorized agency user</td>
                <td>Client account reporting, monitoring and agency/client reporting workflows</td>
              </tr>
              <tr>
                <td>Competitive intelligence</td>
                <td>Public search observations, public landing pages and separately licensed market data</td>
                <td>Understand public competitor advertising and search visibility</td>
              </tr>
            </tbody>
          </table>
          <p>
            These sources are kept distinct. AdIntelivo does not present publicly
            observed competitor activity as if it came from a competitor&rsquo;s Google
            Ads account, and it does not use the Google Ads API to access competitor
            spend, conversions, settings or other private account information.
          </p>

          <h2>3. Google Ads API — intended and implemented product use</h2>
          <p>
            A user connects Google Ads through Google OAuth. The user must already
            have permission to access the Google Ads account being connected. Once
            connected, AdIntelivo uses the Google Ads API for reporting/read
            operations so the user can review that account&rsquo;s performance inside
            the AdIntelivo workspace.
          </p>

          <h3>Reporting data we may retrieve</h3>
          <ul>
            <li>customer/account identity needed to show and distinguish authorized accounts;</li>
            <li>campaign, ad group, ad and keyword structure that is included in a reporting view;</li>
            <li>search-term reporting where that reporting view is enabled;</li>
            <li>status fields needed to label active, paused or removed entities when displayed;</li>
            <li>performance fields such as impressions, clicks, cost, conversions and all conversions;</li>
            <li>campaign budget information used for budget reporting and pacing views;</li>
            <li>other read-only reporting fields required to render a selected account report.</li>
          </ul>

          <h3>API operations</h3>
          <p>
            AdIntelivo is designed to use Google Ads reporting and read-only
            operations, including GoogleAdsService reporting queries. The product
            does not provide a Google Ads campaign editor and does not use mutate
            operations to change advertiser accounts.
          </p>

          <h3>We do not use the Google Ads API to</h3>
          <ul>
            <li>create, edit, pause, enable or remove campaigns, ad groups, ads, keywords or budgets;</li>
            <li>place advertising or manage media spend on behalf of an advertiser;</li>
            <li>obtain private data from a competitor&rsquo;s Google Ads account;</li>
            <li>show one customer&rsquo;s connected account data to another customer;</li>
            <li>sell, license or syndicate connected Google Ads account data;</li>
            <li>represent public competitor observations as Google Ads API metrics.</li>
          </ul>

          <h2>4. Authorization and account selection</h2>
          <p>
            Google OAuth is initiated by an authenticated AdIntelivo user. The user
            authorizes Google access and then connects only an account the user is
            permitted to access. AdIntelivo does not ask users to provide their
            Google password and does not receive the user&rsquo;s Google password.
          </p>
          <p>
            Google Ads uses its required OAuth authorization scope for API access.
            AdIntelivo limits what it does with that authorization at the application
            level to the reporting/read-only product behavior described on this page.
          </p>

          <h2>5. How connected data appears in the product</h2>
          <p>
            First-party Google Ads data is displayed in clearly labelled connected
            account, portfolio and reporting views. Public competitor observations
            appear in separate competitive intelligence views. Where a report places
            the two categories near each other, the source remains labelled so an
            agency user can tell which figures are first-party account metrics and
            which are market observations.
          </p>
          <p>
            The public <Link to="/google-ads">Google Ads integration page</Link> and
            the <Link to="/demo">product demo</Link> contain representative mock-ups
            of this workflow using illustrative sample data.
          </p>

          <h2>6. Access control and customer isolation</h2>
          <ul>
            <li>Connected account data is associated with the agency workspace that authorized the connection.</li>
            <li>One agency cannot use AdIntelivo to browse another agency&rsquo;s private Google Ads account data.</li>
            <li>Application access is restricted to authenticated users of the relevant workspace.</li>
            <li>Google access tokens are treated as sensitive credentials and are not exposed in the public client interface.</li>
          </ul>

          <h2>7. Retention, disconnection and deletion</h2>
          <p>
            AdIntelivo retains connected advertising reporting data only for the
            period needed to provide historical reporting, up to 13 months while the
            account remains connected. If the account is disconnected or the
            workspace is closed, the connection is disabled and stored connected
            account data is scheduled for deletion within 30 days, except records we
            are legally required to retain.
          </p>

          <h2>8. Competitive intelligence sources</h2>
          <p>
            Competitor monitoring uses public or separately licensed sources such as
            publicly displayed search ads, organic search positions, map results,
            publicly reachable landing pages and aggregate keyword-market data. This
            process is independent of the client&rsquo;s Google Ads API connection.
          </p>

          <h2>9. Contact</h2>
          <p>
            API and developer questions: api@adintelivo.com
            <br />
            Privacy and data requests: privacy@adintelivo.com
          </p>
          <p>
            See also the <Link to="/privacy">Privacy policy</Link>,{" "}
            <Link to="/terms">Terms of service</Link>, and{" "}
            <Link to="/google-ads">Google Ads integration overview</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
