import { useContext } from "react";
import "../styles/Search.css";
import { SearchContext } from "../context/Context";



export const Search = () => {

     const { searchTerm, setSearchTerm } = useContext(SearchContext);

 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <input value={searchTerm} onChange= {handleSearch} type="text" placeholder="Search for a country..." />
    </div>
  );
};
