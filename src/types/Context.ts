


export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};


export type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};