import { useState, useMemo } from 'react';
import * as React from 'react';
import { FilterContext } from './FiltersContext';

export default function FilterProvider(props: any) {
  const [filters, setFilters] = useState<Set<string>>(new Set());
  const value = useMemo(() => ({ filters, setFilters }), [filters]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FilterContext.Provider value={value} {...props} />;
}
