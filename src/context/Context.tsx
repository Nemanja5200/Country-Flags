import { createContext } from "react";
import type { SearchContextType, ThemeContextType } from "../types/Context";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}, 
});



export const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
});