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
