import "./App.css";
import MainCard from "./components/MainCard";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import { ContentControlContextProvider } from "./contexts/ContentControlContext";

import usePreventZoom from "./DisableZoom";

function App() {
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
