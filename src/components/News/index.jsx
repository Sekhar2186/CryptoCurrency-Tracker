import React from 'react';
import Button from '../Common/Button';

const NewsComponent = ({ newsdata }) => {
  const fallbackNews = [
    {
      title: "Bitcoin Price Eyes $100K Breakout as Institutional Inflows Surge",
      description: "Spot Bitcoin ETFs record historic net inflows as major asset managers expand their digital asset products, propelling bullish sentiment across the market.",
      url: "https://www.coindesk.com",
      logo: ""
    },
    {
      title: "Ethereum Layer-2 Network Activity Reaches All-Time Highs",
      description: "Scalability solutions on Ethereum witness unprecedented transaction volumes as transaction fees plummet after the recent network upgrades, sparking dApp growth.",
      url: "https://cointelegraph.com",
      logo: ""
    },
    {
      title: "DeFi Protocols Witness Massive Recovery in Total Value Locked (TVL)",
      description: "Decentralized finance ecosystems report a 25% surge in TVL over the past month, driven by next-generation staking mechanisms and yield aggregation solutions.",
      url: "https://blockworks.co",
      logo: ""
    }
  ];

  const displayNews = (Array.isArray(newsdata) && newsdata.length > 0) ? newsdata : fallbackNews;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayNews.map((news, index) => (
          <div
            key={index}
            className="group bg-[#101114] border border-[#1e2028] rounded-2xl overflow-hidden hover:border-[#3a80e9]/40 hover:shadow-[0_0_28px_rgba(58,128,233,0.1)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* News logo / banner */}
              <div className="h-40 bg-[#16181d] flex items-center justify-center overflow-hidden">
                {news.logo ? (
                  <img
                    src={news.logo}
                    alt={`${news.title || news.name} banner`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-[#3a80e9]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#3a80e9">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#3a80e9]/15 text-[#3a80e9] font-inter">
                    Crypto News
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 group-hover:text-[#3a80e9] transition-colors duration-200 font-inter">
                  {news.title || news.name}
                </h3>
                {news.description && (
                  <p className="text-[#6b7280] text-xs leading-relaxed line-clamp-3 font-inter">
                    {news.description}
                  </p>
                )}
              </div>
            </div>

            <div className="px-5 pb-5 pt-2">
              <a href={news.url} target="_blank" rel="noopener noreferrer" className="block">
                <Button text="Read More" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
