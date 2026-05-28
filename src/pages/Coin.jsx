import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/CoinPage/Info";
import LineChart from "../components/CoinPage/LineChart";
import SelectDays from "../components/CoinPage/SelectDays";
import ToggleComponents from "../components/CoinPage/ToggleComponent";
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import { getCoinData } from "../functions/getCoinData";
import { getPrices } from "../functions/getPrices";
import { settingChartData } from "../functions/settingChartData";
import { settingCoinObject } from "../functions/settingCoinObject";
import Comments from "../components/CoinPage/Comments";

function Coin() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) getData();
  }, [id]);

  const getData = async () => {
    setLoading(true);
    let coinData = await getCoinData(id, setError);
    settingCoinObject(coinData, setCoin);
    if (coinData) {
      const prices = await getPrices(id, days, priceType, setError);
      if (prices) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090a]">
      <Header />
      {!error && !loading && coin.id ? (
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6">
          {/* Coin info row */}
          <div className="bg-[#101114] border border-[#1e2028] rounded-2xl p-4 overflow-x-auto">
            <table className="w-full">
              <tbody>
                <List coin={coin} delay={0.2} />
              </tbody>
            </table>
          </div>

          {/* Chart section */}
          <div className="bg-[#101114] border border-[#1e2028] rounded-2xl p-5">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} />
          </div>

          {/* Description */}
          <Info title={coin.name} desc={coin.desc} />

          {/* Comments */}
          <div className="bg-[#101114] border border-[#1e2028] rounded-2xl p-5">
            <Comments coinId={id} />
          </div>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
          <div className="text-6xl">😞</div>
          <div className="text-center">
            <h2 className="text-2xl font-black text-white mb-2">
              Coin Not Found
            </h2>
            <p className="text-[#6b7280] text-sm max-w-xs mx-auto">
              Sorry, we couldn't find the coin you're looking for.
            </p>
          </div>
          <a href="/dashboard">
            <Button text="Back to Dashboard" />
          </a>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Coin;
