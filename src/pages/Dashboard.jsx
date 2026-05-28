import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import Search from "../components/Dashboard/Search";
import TabsComponent from "../components/Dashboard/Tabs";
import PaginationComponent from "../components/Dashboard/Pagination";
// import TopButton from "../components/Common/TopButton"; // commented out — scroll-to-top button
import Footer from "../components/Common/Footer/footer";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  return (
    <div className="min-h-screen bg-[#08090a]">
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Dashboard header section */}
          <div className="max-w-7xl mx-auto px-4 pt-10 pb-2">
            <div className="flex flex-col gap-1 mb-2">
              <h1 className="text-3xl font-black text-white">
                Market <span className="text-[#3a80e9]">Overview</span>
              </h1>
              <p className="text-[#6b7280] text-sm font-medium">
                Top 100 cryptocurrencies by market capitalization
              </p>
            </div>
          </div>

          <Search search={search} handleChange={handleChange} />

          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />

          {!search && (
            <div className="max-w-7xl mx-auto px-4 pb-8 flex justify-center">
              <PaginationComponent
                page={page}
                handlePageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
      {/* <TopButton /> */}{/* Scroll-to-top button — commented out */}
      <Footer />
    </div>
  );
}

export default Dashboard;
