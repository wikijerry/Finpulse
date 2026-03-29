// ============================================
// SAMPLE ARTICLE DATA
// ============================================

const SAMPLE_ARTICLES = [
  {
    id: 1,
    title: "Fed Holds Rates Steady Amid Inflation Concerns",
    excerpt: "The Federal Reserve maintained interest rates at current levels, signaling a cautious approach as inflation data continues to show mixed signals across key economic indicators.",
    body: `<p>The Federal Reserve announced today that it would maintain the federal funds rate at its current level, a decision widely anticipated by market analysts and economists alike. The move reflects a careful balancing act between controlling persistent inflation and supporting economic growth.</p>
<h2>Key Takeaways</h2>
<p>Chair Jerome Powell emphasized that the committee remains "data-dependent" and will continue monitoring incoming economic indicators before making any adjustments to monetary policy. The dot plot projections suggest that most committee members see potential for rate adjustments later in the year.</p>
<blockquote>The economy continues to show resilience, but we must remain vigilant against inflationary pressures that could undermine long-term stability.</blockquote>
<h3>Market Reaction</h3>
<p>Markets responded positively to the announcement, with the S&P 500 gaining 0.8% in after-hours trading. Bond yields remained relatively stable, suggesting that the decision was already priced in by most market participants.</p>
<p>Looking ahead, analysts expect the Fed to maintain this cautious stance through the first half of the year, with the probability of a rate cut in the second half hovering around 60% according to futures markets.</p>`,
    category: "Markets",
    author: "Sarah Mitchell",
    date: "2026-03-29",
    readTime: "5 min",
    status: "published",
    featured: true,
    image: ""
  },
  {
    id: 2,
    title: "Building an Emergency Fund in Uncertain Times",
    excerpt: "Financial experts recommend maintaining 3-6 months of expenses in liquid savings. Here's a structured approach to building your safety net without disrupting your investment strategy.",
    body: `<p>In an era of economic uncertainty, having a robust emergency fund is more critical than ever. Financial planners universally agree that this should be the foundation of any personal finance strategy, yet studies show that nearly 40% of adults cannot cover an unexpected $400 expense.</p>
<h2>The Framework</h2>
<p>Start by calculating your essential monthly expenses — housing, food, utilities, insurance, and minimum debt payments. Multiply this by your target months (3-6 months for employed individuals, 6-12 months for self-employed).</p>
<h3>Where to Keep It</h3>
<p>High-yield savings accounts currently offer rates between 4-5% APY, making them the ideal vehicle for emergency funds. The key is liquidity — you need to access this money within 24-48 hours.</p>
<ul>
<li>High-yield savings accounts (4-5% APY)</li>
<li>Money market funds</li>
<li>Short-term Treasury bills</li>
<li>Split strategy: 2 months in checking, remainder in HYSA</li>
</ul>
<p>Automate your savings with recurring transfers. Even $50 per week adds up to $2,600 annually — a meaningful start toward financial security.</p>`,
    category: "Personal Finance",
    author: "David Chen",
    date: "2026-03-28",
    readTime: "7 min",
    status: "published",
    featured: false,
    image: ""
  },
  {
    id: 3,
    title: "Global Markets React to Trade Policy Shifts",
    excerpt: "Asian and European indices showed mixed signals as new trade agreements reshape the global economic landscape, with technology and manufacturing sectors leading the divergence.",
    body: `<p>Global equity markets displayed a mixed picture today as investors digested the implications of newly announced trade policy frameworks between major economies. The developments mark a significant shift in international commerce dynamics.</p>
<h2>Regional Breakdown</h2>
<p>Asian markets closed higher, with the Nikkei 225 gaining 1.2% and Hong Kong's Hang Seng rising 0.9%. European markets were more subdued, with the DAX and FTSE 100 posting modest declines of 0.3% and 0.2% respectively.</p>
<h3>Sector Impact</h3>
<p>Technology stocks emerged as clear winners, with semiconductor manufacturers posting strong gains on expectations of increased cross-border chip trade. Manufacturing shares, however, faced pressure as companies reassess supply chain configurations.</p>
<p>Currency markets also reflected the uncertainty, with the dollar strengthening against most major pairs. The euro-dollar pair fell to its lowest level in three weeks, while emerging market currencies showed mixed performance.</p>`,
    category: "Economy",
    author: "Sarah Mitchell",
    date: "2026-03-27",
    readTime: "4 min",
    status: "published",
    featured: false,
    image: ""
  },
  {
    id: 4,
    title: "AI Revolution Reaches Wall Street Trading Floors",
    excerpt: "Major investment banks are deploying sophisticated AI systems for portfolio management, raising questions about market efficiency, systematic risk, and the future of human traders.",
    body: `<p>The integration of artificial intelligence into financial markets has reached an inflection point. Major investment banks including Goldman Sachs, JPMorgan, and Morgan Stanley have significantly expanded their AI-driven trading operations in recent months.</p>
<h2>The Scale of Change</h2>
<p>According to industry estimates, AI-driven systems now account for approximately 35% of all trading volume on major US exchanges, up from 20% just two years ago. These systems range from simple algorithmic execution to complex deep learning models that analyze satellite imagery, social media sentiment, and alternative data sources.</p>
<blockquote>We're not replacing traders — we're augmenting them. The best outcomes come from human judgment combined with machine speed and pattern recognition.</blockquote>
<h3>Regulatory Concerns</h3>
<p>The SEC has begun preliminary discussions about new frameworks for AI-driven trading, with particular attention to systemic risk. Critics argue that herding behavior among AI systems could amplify market volatility during stress events.</p>`,
    category: "Markets",
    author: "James Park",
    date: "2026-03-26",
    readTime: "6 min",
    status: "published",
    featured: false,
    image: ""
  },
  {
    id: 5,
    title: "Central Banks Worldwide Shift Toward Digital Currencies",
    excerpt: "Over 90 countries are now exploring or piloting central bank digital currencies, with implications for monetary policy, financial inclusion, and the global banking system.",
    body: `<p>The global shift toward central bank digital currencies (CBDCs) has accelerated dramatically. The Bank for International Settlements reports that 93% of central banks worldwide are now actively researching or piloting digital currency programs.</p>
<h2>Leading the Charge</h2>
<p>China's digital yuan has expanded to cover over 260 million users across 25 cities. The European Central Bank's digital euro project has entered its preparation phase, with a potential launch timeline of 2027-2028. The Bank of England has also advanced its consultation on a "digital pound."</p>
<h3>Impact on Traditional Banking</h3>
<p>Commercial banks face perhaps the most significant disruption. If consumers can hold accounts directly with central banks, the traditional deposit base that funds lending could be significantly reduced. Banks are responding by developing their own tokenized deposit products.</p>
<p>The implications for cross-border payments are equally profound. Current international transfers can take 3-5 days and cost up to 7% in fees. CBDC interoperability platforms promise near-instant settlement at minimal cost.</p>`,
    category: "Economy",
    author: "Elena Vasquez",
    date: "2026-03-25",
    readTime: "8 min",
    status: "published",
    featured: false,
    image: ""
  },
  {
    id: 6,
    title: "Tech Layoffs Slow as Sector Finds New Equilibrium",
    excerpt: "After two years of aggressive cost-cutting, major technology companies are cautiously resuming hiring, particularly in AI, cybersecurity, and cloud infrastructure divisions.",
    body: `<p>The technology sector appears to be entering a new phase of stabilization after a prolonged period of workforce reductions. Data from layoff tracking platforms shows monthly tech layoffs have declined by 65% compared to their peak.</p>
<h2>Where the Jobs Are</h2>
<p>Hiring is rebounding most strongly in three areas: artificial intelligence and machine learning, cybersecurity, and cloud infrastructure. Companies like Microsoft, Google, and Amazon have all announced significant recruitment drives in these domains.</p>
<h3>The New Normal</h3>
<p>However, the nature of tech employment has fundamentally shifted. Remote and hybrid work arrangements remain prevalent, with 72% of tech companies offering flexible work options. Compensation structures have also evolved, with a greater emphasis on base salary versus equity, reflecting lessons from the 2022-2023 downturn.</p>`,
    category: "World News",
    author: "David Chen",
    date: "2026-03-24",
    readTime: "5 min",
    status: "published",
    featured: false,
    image: ""
  },
  {
    id: 7,
    title: "How to Optimize Your Tax Strategy Before Year End",
    excerpt: "With the tax deadline approaching, here are data-driven strategies to minimize your liability through legitimate deductions, credits, and retirement account contributions.",
    body: `<p>Strategic tax planning shouldn't be a last-minute scramble. The most effective approaches require consistent action throughout the year, but there are still meaningful optimizations available as the deadline approaches.</p>
<h2>Maximize Retirement Contributions</h2>
<p>The 2026 contribution limits have increased: $23,500 for 401(k) plans and $7,000 for IRAs ($8,000 if over 50). Every pre-tax dollar contributed reduces your taxable income dollar-for-dollar. If your employer offers a match, ensure you're contributing enough to capture the full benefit.</p>
<h3>Tax-Loss Harvesting</h3>
<p>Review your taxable investment accounts for positions showing unrealized losses. Selling these positions to offset capital gains can significantly reduce your tax bill. Be mindful of the wash-sale rule — you cannot repurchase substantially identical securities within 30 days.</p>
<ul>
<li>Harvest losses to offset capital gains</li>
<li>Deduct up to $3,000 in net losses against ordinary income</li>
<li>Carry forward excess losses to future years</li>
<li>Consider tax-loss harvesting ETFs for automatic optimization</li>
</ul>`,
    category: "Personal Finance",
    author: "Elena Vasquez",
    date: "2026-03-23",
    readTime: "9 min",
    status: "published",
    featured: false,
    image: ""
  },
  {
    id: 8,
    title: "Oil Prices Surge on Supply Chain Disruptions",
    excerpt: "Brent crude climbed above $95 per barrel as geopolitical tensions and shipping route disruptions tighten global supply, pushing energy costs higher across economies.",
    body: `<p>Oil markets experienced a significant spike today as Brent crude surged past the $95 mark, driven by a confluence of supply-side pressures. The move represents a 12% increase over the past month and has reignited concerns about inflationary pressures.</p>
<h2>Supply Constraints</h2>
<p>Multiple factors are contributing to the tightening supply picture. OPEC+ production cuts continue to constrain output, while shipping disruptions through key maritime chokepoints have added logistical costs and delays to global crude delivery.</p>
<h3>Consumer Impact</h3>
<p>The ripple effects are already visible at the pump, with average gasoline prices rising 15 cents per gallon over the past two weeks. Airline stocks have come under pressure as fuel represents their second-largest operating expense. The transportation sector broadly faces margin compression if prices remain elevated.</p>`,
    category: "Markets",
    author: "James Park",
    date: "2026-03-22",
    readTime: "4 min",
    status: "published",
    featured: false,
    image: ""
  }
];

// Market ticker data (mock)
const MARKET_DATA = [
  { symbol: "S&P 500", price: "5,842.31", change: "+0.47%", direction: "up" },
  { symbol: "NASDAQ", price: "18,421.55", change: "+0.63%", direction: "up" },
  { symbol: "DOW", price: "42,128.90", change: "-0.12%", direction: "down" },
  { symbol: "BTC", price: "87,245.00", change: "+2.14%", direction: "up" },
  { symbol: "GOLD", price: "2,178.40", change: "+0.31%", direction: "up" },
  { symbol: "OIL", price: "95.12", change: "+1.82%", direction: "up" },
  { symbol: "EUR/USD", price: "1.0842", change: "-0.15%", direction: "down" },
  { symbol: "10Y YIELD", price: "4.32%", change: "+0.05", direction: "up" }
];

// Breaking news (mock)
const BREAKING_NEWS = [
  "Federal Reserve holds interest rates steady — markets rally on dovish commentary",
  "European Central Bank announces digital euro pilot program expansion",
  "Major tech companies report stronger-than-expected Q1 earnings",
  "Global semiconductor shortage eases as new fabrication facilities come online"
];

// Categories
const CATEGORIES = ["All", "Markets", "Personal Finance", "Economy", "World News", "Opinion", "Tech"];
