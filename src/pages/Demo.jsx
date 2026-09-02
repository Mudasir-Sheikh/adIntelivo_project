import { useState } from "react";
import {
  accounts,
  portfolioStats,
  rankBoard,
  competitorAds,
  alerts,
  keywordGaps,
} from "../data/demo";

function pill(v) {
  if (v === null || v === undefined) return <span className="pill pill--none">—</span>;
  const cls = v <= 3 ? "pill--top" : v <= 10 ? "pill--mid" : "pill--low";
  return <span className={`pill ${cls}`}>{v}</span>;
}

function Portfolio() {
  return (
    <>
      <h2 style={{ fontSize: "1.5rem" }}>Portfolio overview</h2>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.94rem" }}>
        Every account you manage, ordered by the one that needs attention first.
      </p>
      <div className="grid grid--4" style={{ margin: "22px 0 28px" }}>
        {portfolioStats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat__label">{s.label}</div>
            <div className="stat__value">{s.value}</div>
            <div className={`stat__delta ${s.dir}`}>{s.delta}</div>
          </div>
        ))}
      </div>
      <div className="tablewrap">
        <table className="table">
          <thead>
            <tr>
              <th>Account</th>
              <th>Market</th>
              <th>Industry</th>
              <th className="num">Monthly budget</th>
              <th className="num">Competitors</th>
              <th className="num">Live ads</th>
              <th className="num">Health</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((a) => (
              <tr key={a.id}>
                <td style={{ fontWeight: 600 }}>{a.name}</td>
                <td>{a.market}</td>
                <td>{a.industry}</td>
                <td className="num">${a.budget.toLocaleString()}</td>
                <td className="num">{a.competitors}</td>
                <td className="num">{a.ads}</td>
                <td className="num">
                  {a.health}{" "}
                  <span className={a.trend >= 0 ? "up" : "down"}>
                    {a.trend >= 0 ? "▲" : "▼"} {Math.abs(a.trend)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Competitors() {
  return (
    <>
      <h2 style={{ fontSize: "1.5rem" }}>Competitor ads — Viva Nissan</h2>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.94rem" }}>
        Creatives observed on this account&rsquo;s tracked keywords in the last
        seven days. Variants of the same message are grouped.
      </p>
      <div className="grid grid--2" style={{ marginTop: 22 }}>
        {competitorAds.map((ad) => (
          <div className="adcard" key={ad.domain}>
            <div className="adcard__dom">
              Ad &middot; {ad.domain} &middot; {ad.position}
            </div>
            <div className="adcard__title">{ad.title}</div>
            <p className="adcard__body">{ad.body}</p>
            <div className="adcard__meta">
              First seen {ad.firstSeen} &middot; last seen {ad.lastSeen} &middot;{" "}
              {ad.variants} variants{" "}
              {ad.lastSeen === "Today" && (
                <span className="badge badge--live">Live today</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Ranks() {
  return (
    <>
      <h2 style={{ fontSize: "1.5rem" }}>Rank comparison</h2>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.94rem" }}>
        Organic position per keyword. A dash means the business did not appear
        in the first 30 results.
      </p>
      <div className="tablewrap" style={{ marginTop: 22 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Keyword</th>
              <th className="num">Volume</th>
              <th>Viva Nissan</th>
              <th>Casa Nissan</th>
              <th>Charlie Clark</th>
              <th>Fox Toyota</th>
              <th className="num">Ads on page</th>
            </tr>
          </thead>
          <tbody>
            {rankBoard.map((r) => (
              <tr key={r.keyword}>
                <td style={{ fontWeight: 500 }}>{r.keyword}</td>
                <td className="num">{r.volume}</td>
                <td>{pill(r.you)}</td>
                <td>{pill(r.a)}</td>
                <td>{pill(r.b)}</td>
                <td>{pill(r.c)}</td>
                <td className="num">{r.ads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Keywords() {
  return (
    <>
      <h2 style={{ fontSize: "1.5rem" }}>Keyword gaps</h2>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.94rem" }}>
        Searches where a tracked competitor is visible and this client is not,
        or is far behind.
      </p>
      <div className="tablewrap" style={{ marginTop: 22 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Keyword</th>
              <th className="num">Volume / mo</th>
              <th className="num">Est. CPC</th>
              <th>Your rank</th>
              <th>Best competitor</th>
            </tr>
          </thead>
          <tbody>
            {keywordGaps.map((k) => (
              <tr key={k.keyword}>
                <td style={{ fontWeight: 500 }}>{k.keyword}</td>
                <td className="num">{k.volume.toLocaleString()}</td>
                <td className="num">{k.cpc}</td>
                <td>{pill(k.you)}</td>
                <td>
                  {k.best} {pill(k.bestRank)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Alerts() {
  const bar = { high: "", med: "alert__bar--amber", low: "alert__bar--teal" };
  return (
    <>
      <h2 style={{ fontSize: "1.5rem" }}>Alerts</h2>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.94rem" }}>
        Changes detected across the portfolio since your last visit.
      </p>
      <div className="stack" style={{ marginTop: 22 }}>
        {alerts.map((a) => (
          <div className="alert" key={a.title + a.time}>
            <div className={`alert__bar ${bar[a.level]}`} />
            <div className="alert__body">
              <strong>{a.title}</strong>
              <span>{a.body}</span>
            </div>
            <div className="alert__time">{a.time}</div>
          </div>
        ))}
      </div>
    </>
  );
}

const views = [
  ["portfolio", "Portfolio", Portfolio],
  ["competitors", "Competitor ads", Competitors],
  ["ranks", "Rank comparison", Ranks],
  ["keywords", "Keyword gaps", Keywords],
  ["alerts", "Alerts", Alerts],
];

export default function Demo() {
  const [view, setView] = useState("portfolio");
  const Active = views.find((v) => v[0] === view)[2];

  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <h1 style={{ fontSize: "clamp(2rem,4vw,2.9rem)" }}>Product demo</h1>
          <p>
            A working walkthrough of the AdIntelivo interface, populated with
            sample accounts. Nothing here is connected to a live advertiser
            account and no data is stored.
          </p>
        </div>
      </section>
      <div className="demo">
        <aside className="demo__side">
          <h4>Workspace</h4>
          {views.map(([k, label]) => (
            <button
              key={k}
              className={view === k ? "is-active" : ""}
              onClick={() => setView(k)}
            >
              {label}
            </button>
          ))}
        </aside>
        <div className="demo__main">
          <Active />
        </div>
      </div>
    </>
  );
}
