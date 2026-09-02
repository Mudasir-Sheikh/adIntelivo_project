import { Link } from "react-router-dom";

export default function DataUsage() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <h1 style={{ fontSize: "clamp(2rem,4vw,2.9rem)" }}>
            Data usage &amp; API
          </h1>
          <p>
            What AdIntelivo collects, what it does with advertising platform
            data, and the limits we place on ourselves.
          </p>
          <p className="updated">Last updated 2 September 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>1. Our business model, plainly</h2>
          <p>
            AdIntelivo is a subscription software product sold to marketing
            agencies. An agency pays a flat monthly fee — $199, $299 or $499
            depending on how many client accounts it needs to cover — and in
            return gets a workspace that monitors the competitive search
            landscape for those clients.
          </p>
          <p>
            The subscription fee is our only source of revenue. We do not resell
            advertising inventory. We do not manage or place media spend on behalf
            of anyone. We do not take a percentage of ad budget. We do not sell
            data to third parties, and we run no advertising of our own on this
            site or in the product.
          </p>

          <h2>2. What the product does for an agency</h2>
          <p>
            An agency user adds a client account — business name, website and the
            market it sells into. AdIntelivo then:
          </p>
          <ul>
            <li>identifies the businesses genuinely competing for the same searches in that market;</li>
            <li>records the ad creatives those competitors display publicly, with first-seen and last-seen dates;</li>
            <li>records where each business appears in organic results and the local map pack for a tracked keyword set;</li>
            <li>captures the publicly reachable landing page behind each observed ad;</li>
            <li>raises an alert when something changes — a new advertiser appears, an offer changes, a ranking drops, a brand term is bid on;</li>
            <li>produces a weekly brief and a monthly report the agency can send to its client.</li>
          </ul>

          <h2>3. Sources of data</h2>
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th>What it provides</th>
                <th>Whose data it is</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Public search results</td>
                <td>Ad creatives as displayed, organic positions, map pack positions</td>
                <td>Publicly visible to any searcher</td>
              </tr>
              <tr>
                <td>Public landing pages</td>
                <td>Offer, headline and form structure of the page behind an ad</td>
                <td>Publicly reachable web pages</td>
              </tr>
              <tr>
                <td>Keyword data providers</td>
                <td>Search volume, cost-per-click estimates, competition</td>
                <td>Licensed aggregate market data</td>
              </tr>
              <tr>
                <td>Google Ads API (where connected)</td>
                <td>The agency&rsquo;s own client campaign structure and performance</td>
                <td>The agency&rsquo;s own client, connected with consent</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Google Ads API — intended use</h2>
          <p>
            AdIntelivo uses the Google Ads API for one purpose: to read, on
            behalf of an authenticated agency, the campaign structure and
            performance metrics of advertising accounts that the agency already
            manages and has been granted access to. This lets the product show a
            client&rsquo;s own results next to the competitive picture in a
            single view, so the agency does not have to reconcile two systems by
            hand.
          </p>

          <h3>Specifically, we read</h3>
          <ul>
            <li>campaign, ad group and keyword structure for the connected account;</li>
            <li>performance metrics: impressions, clicks, cost, conversions, impression share;</li>
            <li>budget settings, so the product can report pacing against the month.</li>
          </ul>

          <h3>We do not</h3>
          <ul>
            <li>create, edit, pause or delete any campaign, ad group, ad, keyword or budget — our integration is read-only;</li>
            <li>place or manage media spend on any advertiser&rsquo;s behalf;</li>
            <li>use one advertiser&rsquo;s Google Ads data to inform, benchmark against or display anything to any other customer;</li>
            <li>merge Google Ads data with publicly observed competitor data into a single blended metric;</li>
            <li>sell, license, syndicate or otherwise transfer Google Ads data to any third party;</li>
            <li>use Google Ads data to train machine learning models.</li>
          </ul>

          <div className="callout">
            <p>
              First-party advertising data and publicly observed competitor
              activity are always displayed in separate sections with separate
              labels. Observed competitor presence is described as an observation
              from sampled public results — it is never presented as, or
              described as, an impression share figure.
            </p>
          </div>

          <h3>Access, consent and revocation</h3>
          <p>
            Connection is made through Google&rsquo;s OAuth flow by an
            authenticated agency user who already has access to the account in
            question. The scope requested is the minimum needed for read access.
            Tokens are stored encrypted with AES-256, are never displayed back in
            full, and are used only to serve requests initiated by that same
            agency workspace. An agency can disconnect an account at any time from
            the settings page; disconnection revokes the token immediately and
            data pulled from that account is deleted within 30 days.
          </p>

          <h3>Retention of platform data</h3>
          <p>
            Performance data pulled from a connected advertising account is kept
            for 13 months so year-over-year comparison is possible, or until the
            account is disconnected or the subscription ends, whichever comes
            first.
          </p>

          <h2>5. Publicly observed competitor data</h2>
          <p>
            Competitor monitoring uses only material that is publicly visible: the
            ad creative any member of the public sees when they run a search, the
            ranking of a public web page, and the content of a publicly reachable
            landing page. We collect at low frequency — typically once a day per
            tracked keyword set — respect standard access conventions, and store
            what was observed and when. We do not attempt to obtain competitor
            spend figures, account settings, conversion data or any other
            non-public information, and the product never claims to have them.
          </p>

          <h2>6. Access control inside the product</h2>
          <ul>
            <li>Data is partitioned by agency. One agency cannot see another agency&rsquo;s accounts, competitors, reports or connected platform data.</li>
            <li>Within an agency there are three roles: owner, member and read-only viewer.</li>
            <li>Administrative access to production is restricted to named staff, requires multi-factor authentication and is logged.</li>
          </ul>

          <h2>7. Sub-processors</h2>
          <p>
            We use service providers for cloud hosting, managed database hosting,
            transactional email, error monitoring and payment processing. Each is
            engaged under contract and limited to the purpose we engage them for.
            A current list is available on request from privacy@adintelivo.com.
          </p>

          <h2>8. Deletion</h2>
          <p>
            An agency may delete an individual client account, disconnect a
            platform integration, or close the workspace entirely. Closing a
            workspace deletes configuration, collected observations, reports and
            any connected platform data within 30 days, except billing records we
            are required to retain for tax purposes.
          </p>

          <h2>9. Trademark notice</h2>
          <p>
            Google Ads and Google are trademarks of Google LLC. AdIntelivo is an
            independent product and is not affiliated with, sponsored by or
            endorsed by Google. Business names used in demonstrations on this site
            are illustrative sample data.
          </p>

          <h2>10. Contact</h2>
          <p>
            api@adintelivo.com — API and developer contact
            <br />
            privacy@adintelivo.com — privacy and data requests
          </p>
          <p>
            See also the <Link to="/privacy">privacy policy</Link> and the{" "}
            <Link to="/terms">terms of service</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
