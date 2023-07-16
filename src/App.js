
import './App.css';
import MainCard from './components/MainCard';
import { ThemeContextProvider } from './contexts/ThemeContext';

import { ContentControlContextProvider } from './contexts/ContentControlContext';

function App() {
  return (
    <ThemeContextProvider>
      <ContentControlContextProvider>
        <MainCard />
      </ContentControlContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
