export interface Country {
  name: string;
  capital: string[];
  region: string;
  population: number;
  flag: string;
  cca3: string;
  borders?: string[];
}

export interface CountryApiResponse {
  name: {
    common: string;
    official?: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  borders?: string[];
  cca3: string;
}

export interface CountryDetails {
  name: string;
  nativeName: string;
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  flag: string;
  borders: string[];
  tld: string[];
  currencies: { [key: string]: { name: string; symbol?: string } };
  languages: { [key: string]: string };
}

export interface CountryDetailsApiResponse {
  name: {
    common: string;
    official: string;
    nativeName: {
      // Add this block
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  borders?: string[];
  tld: string[];
  currencies: { [key: string]: { name: string; symbol?: string } };
  languages: { [key: string]: string };
}
