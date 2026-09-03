import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <h1 style={{ fontSize: "clamp(2rem,4vw,2.9rem)" }}>Privacy policy</h1>
          <p className="updated">Last updated 3 September 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <p>
            This policy explains what information AdIntelivo collects, why we
            collect it, how long we keep it, who we share it with and how you can
            get it removed. AdIntelivo is a business-to-business subscription
            product sold to marketing agencies. Our customers are agencies; the
            people whose information we hold are the staff of those agencies.
          </p>

          <h2>1. Who we are</h2>
          <p>
            AdIntelivo (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the
            competitive intelligence platform available at adintelivo.com. For
            privacy questions, contact privacy@adintelivo.com. We act as the data
            controller for account information we hold about our own customers,
            and as a data processor for material an agency uploads or connects on
            behalf of its own clients.
          </p>

          <h2>2. Information we collect</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Examples</th>
                <th>Why we collect it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account information</td>
                <td>Name, work email, agency name, hashed password, role</td>
                <td>To create and secure your login and apply permissions</td>
              </tr>
              <tr>
                <td>Billing information</td>
                <td>Billing contact, billing address, invoice history</td>
                <td>To issue and record subscription invoices</td>
              </tr>
              <tr>
                <td>Configuration you enter</td>
                <td>Client business names, websites, markets, keyword lists, competitor selections</td>
                <td>To know what to monitor on your behalf</td>
              </tr>
              <tr>
                <td>Publicly observed material</td>
                <td>Search result positions, publicly displayed ad creatives, publicly reachable landing pages</td>
                <td>To produce the competitive analysis that is the product</td>
              </tr>
              <tr>
                <td>Connected advertising data</td>
                <td>Where you connect a Google Ads account, account structure and performance reporting data retrieved through reporting/read-only product operations</td>
                <td>To show your own client&rsquo;s performance alongside competitive context</td>
              </tr>
              <tr>
                <td>Product usage</td>
                <td>Pages viewed in the app, feature usage, error logs, IP address</td>
                <td>To keep the service reliable and secure and to fix faults</td>
              </tr>
            </tbody>
          </table>

          <h2>3. What we do not collect</h2>
          <ul>
            <li>We do not collect special category data — health, biometric, racial or ethnic origin, religious belief, political opinion or sexual orientation.</li>
            <li>We do not collect payment card numbers. Card details, where used, are handled by our payment processor and never reach our servers.</li>
            <li>We do not buy personal data from data brokers.</li>
            <li>We do not use third-party advertising trackers or run advertising on this site.</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>
            The application sets one essential cookie to keep you signed in. We
            use no advertising cookies and no cross-site tracking. Analytics, if
            enabled, is limited to aggregate page counts with IP addresses
            truncated. Blocking non-essential cookies does not reduce
            functionality.
          </p>

          <h2>5. Legal basis for processing</h2>
          <p>
            Where GDPR or UK GDPR applies, we rely on: performance of a contract
            for account, billing and configuration data; legitimate interests for
            security logging and product improvement, balanced against your
            rights; and consent where you explicitly connect a third-party
            account, which you may withdraw at any time by disconnecting it.
          </p>

          <h2>6. How we share information</h2>
          <p>
            We do not sell personal information and we do not share one
            customer&rsquo;s data with another customer. We share limited data
            with service providers who help us run the product — cloud hosting,
            database hosting, transactional email delivery, error monitoring, and
            payment processing — each under contract, each restricted to the
            purpose we engage them for. We disclose information to authorities
            only where legally required, and we will notify you unless prohibited
            from doing so.
          </p>

          <h2>7. International transfers</h2>
          <p>
            Our infrastructure is hosted in the United States. Where data is
            transferred from the EEA or the UK, we rely on Standard Contractual
            Clauses with our processors.
          </p>

          <h2>8. Retention</h2>
          <ul>
            <li>Account and configuration data: for as long as your subscription is active, then 90 days, then deleted.</li>
            <li>Collected competitive observations: rolling 24 months, so year-over-year comparison is possible.</li>
            <li>Connected advertising data: up to 13 months while the account remains connected; after disconnection or workspace closure, stored connected-account data is scheduled for deletion within 30 days, except records we are legally required to retain.</li>
            <li>Billing records: 7 years, as required for tax and accounting.</li>
            <li>Security and error logs: 90 days.</li>
          </ul>

          <h2>9. Security</h2>
          <p>
            We use transport encryption for data in transit and access controls for
            production systems. Third-party access tokens are treated as sensitive
            credentials, stored server-side rather than exposed in the public
            client interface, and are accessible only to the systems and personnel
            that need them to provide the service.
          </p>

          <h2>10. Your rights</h2>
          <p>
            Subject to your location, you may request access to the data we hold
            about you, correction of inaccurate data, deletion, a portable copy,
            restriction of processing, or you may object to processing based on
            legitimate interests. California residents may additionally request
            disclosure of categories collected and shared, and may opt out of any
            sale or sharing — although we do neither. Exercising a right never
            results in a worse price or service.
          </p>
          <p>
            Email privacy@adintelivo.com. We verify the request and respond within
            30 days. If we decline, we explain why and you may appeal by replying
            to that response.
          </p>

          <h2>11. Children</h2>
          <p>
            AdIntelivo is a business tool and is not directed at anyone under 18.
            We do not knowingly collect information from children. If you believe
            a child&rsquo;s data has reached us, email privacy@adintelivo.com and
            we will delete it.
          </p>

          <h2>12. Changes to this policy</h2>
          <p>
            If we change this policy materially, we email account owners at least
            14 days before the change takes effect and update the date at the top
            of this page. Previous versions are available on request.
          </p>

          <h2>13. Contact</h2>
          <p>
            privacy@adintelivo.com — privacy and data subject requests
            <br />
            hello@adintelivo.com — everything else
          </p>

          <div className="callout">
            <p>
              For detail specific to advertising platform data, including the
              Google Ads API, see <Link to="/data-usage">Data usage &amp; API</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
