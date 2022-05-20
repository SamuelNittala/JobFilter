import { createContext, useContext } from 'react';

type contextType = {
  filters: Set<string>;
  setFilters: React.Dispatch<React.SetStateAction<Set<string>>>;
};

const FilterContext = createContext<contextType | undefined>(undefined);

const useFilters = () => {
  const filterContext = useContext(FilterContext);
  if (!filterContext) {
    throw new Error('useFilters must be used within FiltersContext');
  }
  return filterContext;
};

export { useFilters, FilterContext };
