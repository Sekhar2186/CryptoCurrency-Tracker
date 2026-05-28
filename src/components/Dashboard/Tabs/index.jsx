import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid";
import List from "../List";
import Button from "../../Common/Button";

export default function TabsComponent({ coins, setSearch }) {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    color: "#6b7280",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
    fontSize: "0.875rem",
    "&.Mui-selected": {
      color: "#3a80e9",
    },
  };

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="text-5xl">😞</div>
      <p className="text-[#6b7280] text-lg font-medium">
        No coins found matching your search
      </p>
      {setSearch && (
        <Button text="Clear Search" onClick={() => setSearch("")} />
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 pb-10">
      <TabContext value={value}>
        {/* Tab bar */}
        <div className="border-b border-[#1e2028] mb-6">
          <TabList
            onChange={handleChange}
            sx={{
              "& .MuiTabs-indicator": { backgroundColor: "#3a80e9" },
            }}
          >
            <Tab label="Grid View" value="grid" sx={tabStyle} />
            <Tab label="List View" value="list" sx={tabStyle} />
          </TabList>
        </div>

        {/* Grid panel */}
        <TabPanel value="grid" sx={{ padding: 0 }}>
          {coins.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {coins.map((coin, i) => (
                <Grid coin={coin} key={i} delay={(i % 4) * 0.1} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </TabPanel>

        {/* List panel */}
        <TabPanel value="list" sx={{ padding: 0 }}>
          {coins.length > 0 ? (
            <div className="overflow-x-auto rounded-2xl border border-[#1e2028] bg-[#0d0f12]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1e2028]">
                    <th className="py-3 px-4 text-left text-xs font-semibold text-[#4b5563] uppercase tracking-wider w-12"></th>
                    <th className="py-3 px-2 text-left text-xs font-semibold text-[#4b5563] uppercase tracking-wider">Coin</th>
                    <th className="py-3 px-2 text-left text-xs font-semibold text-[#4b5563] uppercase tracking-wider">24h</th>
                    <th className="py-3 px-2 text-right text-xs font-semibold text-[#4b5563] uppercase tracking-wider">Price</th>
                    <th className="py-3 px-2 text-right text-xs font-semibold text-[#4b5563] uppercase tracking-wider hidden md:table-cell">Volume</th>
                    <th className="py-3 px-2 text-right text-xs font-semibold text-[#4b5563] uppercase tracking-wider hidden lg:table-cell">Market Cap</th>
                    <th className="py-3 px-2 text-right text-xs font-semibold text-[#4b5563] uppercase tracking-wider lg:hidden">Mkt Cap</th>
                    <th className="py-3 px-4 text-right text-xs font-semibold text-[#4b5563] uppercase tracking-wider">Watch</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin, i) => (
                    <List coin={coin} key={i} delay={(i % 8) * 0.08} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState />
          )}
        </TabPanel>
      </TabContext>
    </div>
  );
}
