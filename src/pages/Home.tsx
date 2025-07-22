import { useContext, useEffect, useState } from "react";
import { Countryapi } from "../api/api";
import type { Country } from "../types/Countries";
import { CountryCard } from "../components/CountryCard";
import { Search } from "../components/Search";
import { Filter } from "../components/Filter";
import { FilterContext, SearchContext } from "../context/Context";

export const Home = () => {
  const [data, setData] = useState<Country[]>([]);

  const { searchTerm } = useContext(SearchContext);
  const { filterRegion } = useContext(FilterContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Countryapi.GetCountries();
        console.log(response);
        setData(response);
        const lookup = response.reduce(
          (acc, country) => {
            acc[country.cca3] = country.name;
            return acc;
          },
          {} as { [code: string]: string },
        );

        localStorage.setItem("countryMap", JSON.stringify(lookup));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="filter-container">
        <Search />
        <Filter />
      </div>
      <div className="cards-container">
        {data
          .filter((country) => {
            const matchSearch =
              searchTerm === "" ||
              country.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchFilter =
              filterRegion === "" ||
              country.region.toLowerCase() === filterRegion.toLowerCase();
            return matchSearch && matchFilter;
          })
          .map((country, idx) => (
            <CountryCard key={country.name + idx} country={country} />
          ))}
      </div>
    </>
  );
};
