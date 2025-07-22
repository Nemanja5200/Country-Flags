import axios from "axios";
import type {
  Country,
  CountryApiResponse,
  CountryDetails,
} from "../types/Countries";
import { parseCountry, parseCountryDetails } from "../utils/Parser";

const BASE_URL = "https://restcountries.com/v3.1/";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

class CountryApi {
  async GetCountries(): Promise<Country[]> {
    const response = await api.get(
      "all?fields=name,capital,region,population,flags,cca3",
    );
    return response.data.map((country: CountryApiResponse) =>
      parseCountry(country),
    );
  }

  async GetCountry(name: string): Promise<CountryDetails> {
    const response = await api.get(
      `name/${name}?fields=name,capital,region,population,flags,borders,subregion,tld,currencies,languages,nativeName`,
    );

    const country = response.data.find(
      (country: CountryApiResponse) => country.name.common === name,
    );
    return parseCountryDetails(country);
  }
}

export const Countryapi = new CountryApi();
