import { createContext, useEffect, useState } from "react";
import { Countryapi } from "./api/api";
import type { Country } from "./types/countries";
import { Header } from "./components/Header";
import { CountryCard } from "./components/CountryCard";
import "./App.css";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import type { SearchContextType, ThemeContextType } from "./types/Context";




export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}, 
});


export const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
});

function App() {
  const [data, setData] = useState<Country[]>([]);
  const [theme, SetTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const toggleTheme = () => {
    SetTheme((curr) => (curr === "light" ? "dark" : "light"));
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

  console.log(searchTerm)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SearchContext value={{searchTerm, setSearchTerm}}>
      <div className="App" id={theme}>
        <Header />
        <div className="filter-container">
          <Search />
          <Filter />
        </div>
        <div className="cards-container">
          {data
          .filter((country) => {
            if(searchTerm === "") return country;
            else if (country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return country;
          })
          .map((country, idx) => (
            <CountryCard key={country.name + idx} country={country} />
          ))}
        </div>
      </div>
      </SearchContext>
    </ThemeContext.Provider>
  );
}

export default App;
