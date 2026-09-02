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
            <span className="hero__tag">Live ad intelligence for agencies</span>
            <h1>Know what your client&rsquo;s competitors ran today.</h1>
            <p className="lede">
              AdIntelivo watches the search results your clients compete in. It
              captures competitor ad copy as it changes, tracks who ranks where,
              and turns the difference into a report you can put in front of the
              client on Monday morning.
            </p>
            <div className="btn-row">
              <Link to="/demo" className="btn btn--primary">
                Walk through the demo
              </Link>
              <Link to="/how-it-works" className="btn btn--ghost">
                How it works
              </Link>
            </div>
            <p className="hero__note">
              Built for agencies managing 5 to 100 local accounts. Sample data
              shown throughout this site.
            </p>
          </div>

          <div className="board">
            <div className="board__head">
              <span className="board__dot" aria-hidden="true" />
              Viva Nissan &middot; El Paso, TX
              <span className="board__stamp">refreshed 06:00</span>
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
                    <td>
                      <span className="pill pill--ad">{r.ads}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>The three questions clients actually ask</h2>
          <p className="lede">
            Agencies lose accounts in the gap between a spend report and a
            straight answer. AdIntelivo is built around the answer.
          </p>
          <div className="grid grid--3" style={{ marginTop: 34 }}>
            <div className="feature">
              <h3>Who is bidding against me?</h3>
              <p>
                Competitors are identified per market and per business type, then
                confirmed against what actually appears in the results — not
                guessed from a category list.
              </p>
            </div>
            <div className="feature">
              <h3>What are they saying?</h3>
              <p>
                Every headline, description, sitelink and offer is captured with
                a first-seen and last-seen date, so a changed offer is visible
                the day it changes.
              </p>
            </div>
            <div className="feature">
              <h3>Where am I losing?</h3>
              <p>
                Rank comparison across organic, maps and paid placement shows the
                exact queries where a competitor is visible and your client is
                not.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap">
          <h2>Competitor ads, as captured</h2>
          <p className="lede">
            Sample of live creatives collected for one account. Near-duplicate
            variants are grouped so you review four messages, not forty strings.
          </p>
          <div className="grid grid--2" style={{ marginTop: 30 }}>
            {competitorAds.map((ad) => (
              <div className="adcard" key={ad.domain}>
                <div className="adcard__dom">
                  Ad &middot; {ad.domain} &middot; {ad.position}
                </div>
                <div className="adcard__title">{ad.title}</div>
                <p className="adcard__body">{ad.body}</p>
                <div className="adcard__meta">
                  First seen {ad.firstSeen} &middot; last seen {ad.lastSeen}{" "}
                  &middot; {ad.variants} creative variants grouped
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap center">
          <h2>Put it in front of a client this week</h2>
          <p className="lede">
            Open the interactive demo to see the portfolio view, competitor
            tracking, keyword gaps and alert feed with sample accounts.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link to="/demo" className="btn btn--primary">
              Open the demo
            </Link>
            <Link to="/pricing" className="btn btn--ghost">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
