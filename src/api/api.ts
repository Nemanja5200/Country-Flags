import axios from "axios";
import type { Country } from "../types/Countries";

const BASE_URL = "https://restcountries.com/v3.1/";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

class CountryApi {
  async GetCountries(): Promise<Country[]> {
    const response = await api.get(
      "all?fields=name,capital,region,population,flags",
    );
    return response.data.map((country: any) => ({
      name: country.name.common,
      capital: country.capital,
      region: country.region,
      population: country.population,
      flag: country.flags.png,
    }));
  }

  async GetCountry(name: string): Promise<Country> {
    const response = await api.get(
      `name/${name}?fields=name,capital,region,population,flags`,
    );

    const country = response.data[0];
    return {
      name: country.name.common,
      capital: country.capital,
      region: country.region,
      population: country.population,
      flag: country.flags.png,
    };
  }
}

export const Countryapi = new CountryApi();
