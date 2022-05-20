import React, { useEffect, useState } from 'react';
import jobData from '../../public/fixtures/data.json';
import FilterCardList from './FilterCardList';
import { useFilters } from '../context/FiltersContext';
import { filterJobData, formatJobJson } from '../../src/utils';

export default function FilterMain() {
  const { filters } = useFilters();
  const jd = formatJobJson(jobData);
  const [jobListData, setJobListData] = useState(filterJobData(filters, jd));
  useEffect(() => {
    setJobListData(filterJobData(filters, jd));
  }, [filters.size]);
  return <FilterCardList jobData={jobListData} />;
}
