import { createContext } from "react";
import type {
  FilterContextType,
  SearchContextType,
  ThemeContextType,
} from "../types/Context";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
});

export const FilterContext = createContext<FilterContextType>({
  filterRegion: "",
  setFilterRegion: () => {},
});
