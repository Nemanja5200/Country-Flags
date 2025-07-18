import { REGION } from "../types/Region";
import "../styles/Filter.css";

export const Filter = () => {
  return (
    <div className="filter-container">
      <select className="filter-select" value="">
        <option value="" disabled hidden>
          Filter by Region
        </option>
        <option value={REGION.AFRICA.toLowerCase()}>{REGION.AFRICA}</option>
        <option value={REGION.AMERICA.toLowerCase()}>{REGION.AMERICA}</option>
        <option value={REGION.ASIA.toLowerCase()}>{REGION.ASIA}</option>
        <option value={REGION.EUROPE.toLowerCase()}>{REGION.EUROPE}</option>
        <option value={REGION.Oceania.toLowerCase()}>{REGION.Oceania}</option>
      </select>
    </div>
  );
};
