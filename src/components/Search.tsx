import { useContext, useEffect, useState, type ChangeEvent } from "react";
import "../styles/Search.css";
import { SearchContext } from "../context/Context";

export const Search = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(localSearchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [localSearchTerm, setSearchTerm]);

  return (
    <div className="search">
      <input
        value={localSearchTerm}
        onChange={handleSearch}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};
