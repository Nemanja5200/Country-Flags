import type {
  Country,
  CountryApiResponse,
  CountryDetails,
  CountryDetailsApiResponse,
} from "../types/Countries";

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

export const parseCountryDetails = (
  countryString: CountryDetailsApiResponse,
): CountryDetails => {
  return {
    name: countryString.name.common,
    nativeName:
      Object.values(countryString.name.nativeName)[0]?.common ||
      countryString.name.common,
    capital: countryString.capital,
    region: countryString.region,
    subregion: countryString.subregion,
    population: countryString.population,
    flag: countryString.flags.png,
    borders: countryString.borders || [],
    tld: countryString.tld,
    currencies: countryString.currencies,
    languages: countryString.languages,
  };
};
