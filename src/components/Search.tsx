import { useContext, useEffect, useState } from "react";
import "../styles/Search.css";
import { SearchContext } from "../context/Context";

export const Search = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(localSearchTerm);
    }, 200);

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
