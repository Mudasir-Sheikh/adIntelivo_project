// All data on this site is illustrative sample data for demonstration only.
// No live advertiser accounts, no API calls, no database.

export const accounts = [
  { id: 1, name: "Viva Nissan", market: "El Paso, TX", industry: "Automotive", budget: 18400, competitors: 5, ads: 12, health: 82, trend: +4 },
  { id: 2, name: "Fiesta Kia", market: "Albuquerque, NM", industry: "Automotive", budget: 14250, competitors: 4, ads: 9, health: 74, trend: -3 },
  { id: 3, name: "Toliver Chevrolet", market: "McAlester, OK", industry: "Automotive", budget: 6900, competitors: 3, ads: 5, health: 88, trend: +1 },
  { id: 4, name: "RightDrive Auto", market: "Muncie, IN", industry: "Automotive", budget: 5100, competitors: 4, ads: 7, health: 61, trend: -8 },
  { id: 5, name: "FirstLight Credit Union", market: "El Paso, TX", industry: "Financial services", budget: 9800, competitors: 4, ads: 6, health: 79, trend: +2 },
  { id: 6, name: "Luminace Aesthetics", market: "El Paso, TX", industry: "Med spa", budget: 4300, competitors: 6, ads: 11, health: 68, trend: +6 },
  { id: 7, name: "GotTrucks", market: "San Antonio, TX", industry: "Automotive", budget: 11750, competitors: 5, ads: 8, health: 71, trend: -1 },
];

export const rankBoard = [
  { keyword: "nissan dealer near me", volume: "9,900", you: 2, a: 1, b: 4, c: null, ads: 3 },
  { keyword: "new nissan for sale", volume: "2,400", you: 5, a: 2, b: 3, c: 11, ads: 2 },
  { keyword: "used cars el paso", volume: "6,600", you: 8, a: 3, b: 1, c: 6, ads: 4 },
  { keyword: "nissan rogue lease deals", volume: "1,300", you: null, a: 4, b: 9, c: 2, ads: 3 },
  { keyword: "car financing bad credit", volume: "3,600", you: 14, a: 6, b: 2, c: 8, ads: 5 },
  { keyword: "nissan service center", volume: "880", you: 1, a: 7, b: null, c: 12, ads: 1 },
];

export const competitorAds = [
  {
    domain: "casanissan.com",
    title: "Casa Nissan El Paso — 0% APR for 60 Months",
    body: "Over 300 new Nissan models in stock. Same-day approval on most credit profiles. Schedule a test drive online in under two minutes.",
    firstSeen: "Aug 14", lastSeen: "Today", variants: 4, position: "Top 1",
  },
  {
    domain: "charlieclarknissan.com",
    title: "Charlie Clark Nissan | $2,500 Trade-In Bonus",
    body: "Trade up this month and get a guaranteed minimum on any 2016 or newer vehicle. Free appraisal, no obligation.",
    firstSeen: "Jul 29", lastSeen: "Today", variants: 6, position: "Top 2",
  },
  {
    domain: "shamaleyford.com",
    title: "Why Pay Dealer Fees? Shamaley Ford",
    body: "Transparent pricing with no hidden add-ons. Compare our out-the-door price against any local dealer.",
    firstSeen: "Aug 22", lastSeen: "Yesterday", variants: 2, position: "Bottom 1",
  },
  {
    domain: "foxtoyotaelpaso.com",
    title: "Fox Toyota — Bidding on Nissan Terms",
    body: "Looking at a Rogue? Compare the RAV4 first. Side-by-side pricing, in stock now in El Paso.",
    firstSeen: "Aug 30", lastSeen: "Today", variants: 1, position: "Top 3",
  },
];

export const alerts = [
  { level: "high", title: "New competitor entered paid search", body: "Fox Toyota started bidding on 4 of Viva Nissan's tracked keywords.", time: "2h ago" },
  { level: "high", title: "Brand term hijack detected", body: "An aggregator is showing ads on the query \"viva nissan el paso\".", time: "6h ago" },
  { level: "med", title: "Ad copy change", body: "Casa Nissan swapped its headline offer from $1,500 to $2,500 trade-in bonus.", time: "Yesterday" },
  { level: "med", title: "Rank drop", body: "RightDrive Auto fell from position 4 to 9 on \"used trucks muncie\".", time: "Yesterday" },
  { level: "low", title: "Landing page updated", body: "Charlie Clark Nissan replaced its finance page hero and form fields.", time: "2 days ago" },
];

export const keywordGaps = [
  { keyword: "certified pre owned nissan", volume: 2900, cpc: "$3.40", you: null, best: "casanissan.com", bestRank: 2 },
  { keyword: "nissan altima deals", volume: 1600, cpc: "$4.15", you: 18, best: "charlieclarknissan.com", bestRank: 3 },
  { keyword: "no money down car lease", volume: 4400, cpc: "$5.80", you: null, best: "foxtoyotaelpaso.com", bestRank: 5 },
  { keyword: "trade in value calculator", volume: 8100, cpc: "$2.20", you: 22, best: "casanissan.com", bestRank: 4 },
  { keyword: "nissan frontier for sale", volume: 3300, cpc: "$3.05", you: 9, best: "casanissan.com", bestRank: 1 },
];

export const portfolioStats = [
  { label: "Client accounts", value: "27", delta: "+4 this quarter", dir: "up" },
  { label: "Competitors tracked", value: "112", delta: "+9 this month", dir: "up" },
  { label: "Live competitor ads", value: "348", delta: "+22 this week", dir: "up" },
  { label: "Open alerts", value: "16", delta: "5 high priority", dir: "down" },
];
