import type { Country } from "../types/Countries";
import "../styles/CountryCard.css";
type CountryCardProps = {
  country: Country;
};

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="card">
      <img className="img" src={country.flag} alt="Flag" />
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
