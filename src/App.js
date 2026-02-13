import "./App.css";
import { useEffect } from "react";
import MainCard from "./components/MainCard";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import { ContentControlContextProvider } from "./contexts/ContentControlContext";

import usePreventZoom from "./DisableZoom";

function App() {
  useEffect(() => {
    window.location.href = "https://mihir-gupta.vercel.app/";
  }, []);

  usePreventZoom();
  return (
    <ThemeContextProvider>
      <ContentControlContextProvider>
        <MainCard />
      </ContentControlContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
