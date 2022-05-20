/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
import type { FilterCardPropsType } from './components/FilterCard.types';

const formatJobJson = (jsonData: any): Array<FilterCardPropsType> => {
  const jobArray = jsonData.map((job: any) => {
    const {
      company,
      position,
      location,
      postedAt,
      contract,
      new: newType,
      featured,
      languages,
    } = job;
    return {
      title: position,
      timePassed: postedAt,
      jobType: contract,
      jobLocation: location,
      companyName: company,
      extraFeatures: [newType && 'New', featured && 'Featured'],
      languages,
    };
  });
  return jobArray;
};

const filterJobData = (filters: Set<string>, jobData: Array<FilterCardPropsType>) => {
  if (filters.size === 0) return jobData;
  return jobData.filter((job: FilterCardPropsType) =>
    job.languages.some((language: string) => filters.has(language)),
  );
};

export { formatJobJson, filterJobData };
