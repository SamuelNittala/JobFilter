import type { FilterCardPropsType } from './components/FilterCard.types';

const formatJobJson = (jsonData: any): Array<FilterCardPropsType> => {
  const jobArray = jsonData.map((job: any) => {
    const { company, position, location, postedAt, contract, new: newType, featured } = job;
    return {
      title: position,
      timePassed: postedAt,
      jobType: contract,
      jobLocation: location,
      companyName: company,
      extraFeatures: [newType && 'New', featured && 'Featured'],
    };
  });
  return jobArray;
};

export default formatJobJson;
