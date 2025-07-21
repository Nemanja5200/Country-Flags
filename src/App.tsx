import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages/Home";
import { FilterContext, SearchContext, ThemeContext } from "./context/Context";
import "./App.css";

function App() {
  const [theme, SetTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  const toggleTheme = () => {
    SetTheme((curr) => {
      const next = curr === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <FilterContext.Provider value={{ filterRegion, setFilterRegion }}>
          <div className="App" id={theme}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </FilterContext.Provider>
      </SearchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
