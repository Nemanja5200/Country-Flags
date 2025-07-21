import { useEffect, useState } from "react";
import { Countryapi } from "./api/api";
import type { Country } from "./types/Countries";
import { Header } from "./components/Header";
import { CountryCard } from "./components/CountryCard";
import "./App.css";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import { FilterContext, SearchContext, ThemeContext } from "./context/Context";

function App() {
  const [data, setData] = useState<Country[]>([]);
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
    const fetchData = async () => {
      try {
        const responce = await Countryapi.GetCountries();
        console.log(responce);
        setData(responce);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SearchContext value={{ searchTerm, setSearchTerm }}>
        <FilterContext value={{ filterRegion, setFilterRegion }}>
          <div className="App" id={theme}>
            <Header />
            <div className="filter-container">
              <Search />
              <Filter />
            </div>
            <div className="cards-container">
              {data
                .filter((country) => {
                  const matchSearch =
                    searchTerm === "" ||
                    country.name
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase());
                  const matchFilter =
                    filterRegion === "" ||
                    country.region.toLowerCase() === filterRegion.toLowerCase();
                  return matchSearch && matchFilter;
                })
                .map((country, idx) => (
                  <CountryCard key={country.name + idx} country={country} />
                ))}
            </div>
          </div>
        </FilterContext>
      </SearchContext>
    </ThemeContext.Provider>
  );
}

export default App;
