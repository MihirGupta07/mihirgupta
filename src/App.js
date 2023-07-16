import logo from './logo.svg';
import './App.css';
import MainCard from './components/MainCard';
import { ThemeContext, ThemeContextProvider, useThemeRendererContext } from './contexts/ThemeContext';
import { useContext } from 'react';
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
