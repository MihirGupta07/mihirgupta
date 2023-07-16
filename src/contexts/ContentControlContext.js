import { createContext, useContext, useState } from "react";

export const ContentControlContext = createContext();

export const ContentControlContextProvider = ({ children }) => {
    const [currentContent, setcurrentContent] = useState('Byjus');
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <ContentControlContext.Provider value={{ currentContent, setcurrentContent, selectedTab, setSelectedTab }}>
            {children}
        </ContentControlContext.Provider>
    )

}

export const useContentControlContext = () => useContext(ContentControlContext);
