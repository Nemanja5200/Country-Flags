import type { Country } from "../types/Countries";
import "../styles/CountryCard.css";
import { Link } from "react-router-dom";
type CountryCardProps = {
  country: Country;
};

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="card">
      <Link
        to={`/country/${encodeURIComponent(country.name)}`}
        className="card-content-link"
      >
        <img className="img" src={country.flag} alt="Flag" />
      </Link>
      <div className="info">
        <h2>{country.name}</h2>
        <p>
          <b>Population:</b> {country.population.toLocaleString()}
        </p>
        <p>
          <b>Region</b>: {country.region}
        </p>
        <p>
          <b>Capital</b>: {country.capital}
        </p>
      </div>
    </div>
  );
};
