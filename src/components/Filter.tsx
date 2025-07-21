import { REGION } from "../types/Region";
import "../styles/Filter.css";
import { useContext } from "react";
import { FilterContext } from "../context/Context";

export const Filter = () => {
  const { filterRegion, setFilterRegion } = useContext(FilterContext);
  return (
    <div className="filter-container">
      <select
        className="filter-select"
        value={filterRegion}
        onChange={(e) => setFilterRegion(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value={REGION.AFRICA.toLowerCase()}>{REGION.AFRICA}</option>
        <option value={REGION.AMERICA.toLowerCase()}>{REGION.AMERICA}</option>
        <option value={REGION.ASIA.toLowerCase()}>{REGION.ASIA}</option>
        <option value={REGION.EUROPE.toLowerCase()}>{REGION.EUROPE}</option>
        <option value={REGION.Oceania.toLowerCase()}>{REGION.Oceania}</option>
      </select>
    </div>
  );
};
