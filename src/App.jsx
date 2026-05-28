import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react";  // commented out — not needed without custom cursor
import News from "./pages/News";
import Login from "./components/auth/login";
import { AuthProvider } from "./contexts/authContext";
import Register from "./components/auth/register";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  // ── Custom Cursor (commented out — reverting to normal system cursor) ──────────
  // var cursor;
  // var cursorPointer;
  //
  // useEffect(() => {
  //   cursor = document.getElementById("cursor");
  //   cursorPointer = document.getElementById("cursor-pointer");
  //
  //   document.body.addEventListener("mousemove", function (e) {
  //     return (
  //       (cursor.style.left = e.clientX + "px"),
  //       (cursor.style.top = e.clientY + "px"),
  //       (cursorPointer.style.left = e.clientX + "px"),
  //       (cursorPointer.style.top = e.clientY + "px")
  //     );
  //   });
  //
  //   document.body.addEventListener("mousedown", function (e) {
  //     return (
  //       (cursor.style.height = "0.5rem"),
  //       (cursor.style.width = "0.5rem"),
  //       (cursorPointer.style.height = "3rem"),
  //       (cursorPointer.style.width = "3rem")
  //     );
  //   });
  //
  //   document.body.addEventListener("mouseup", function (e) {
  //     return (
  //       (cursor.style.height = "0.3rem"),
  //       (cursor.style.width = "0.3rem"),
  //       (cursorPointer.style.height = "2rem"),
  //       (cursorPointer.style.width = "2rem")
  //     );
  //   });
  // }, []);
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="App">
      {/* Custom cursor elements (commented out — normal system cursor restored) */}
      {/* <div className="cursor" id="cursor" /> */}
      {/* <div className="cursor-pointer" id="cursor-pointer" /> */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/coin/:id" element={<Coin />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
