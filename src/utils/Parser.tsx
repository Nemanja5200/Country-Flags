import type { Country, CountryApiResponse } from "../types/Countries";

export const parseCountry = (countryString: CountryApiResponse): Country => {
  return {
    name: countryString.name.common,
    capital: countryString.capital,
    region: countryString.region,
    population: countryString.population,
    flag: countryString.flags.png,
    borders: countryString.borders,
    cca3: countryString.cca3,
  };
};
