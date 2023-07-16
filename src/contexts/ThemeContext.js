import { createContext, useContext, useState } from "react";
import { gradients } from "../util/constants";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [colorNumber, setColorNumber] = useState(0);
    const updateColorNumber = () => {
        setColorNumber(prev => (prev + 1) % gradients.length)
    }
    return (
        <ThemeContext.Provider value={{ colorNumber, setColorNumber, updateColorNumber }}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useThemeRendererContext = () => useContext(ThemeContext);