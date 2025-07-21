export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export type FilterContextType = {
  filterRegion: string;
  setFilterRegion: (term: string) => void;
};
