import React from 'react';
import FilterCard from './FilterCard';
import type { FilterCardPropsType } from './FilterCard.types';

type PropType = {
  jobData: Array<FilterCardPropsType>;
};

export default function FilterCardList({ jobData }: PropType) {
  return (
    <li>
      {jobData.map((job) => {
        const { companyName, jobLocation, jobType, timePassed, title, extraFeatures, languages } =
          job;
        return (
          <FilterCard
            companyName={companyName}
            jobLocation={jobLocation}
            jobType={jobType}
            timePassed={timePassed}
            title={title}
            extraFeatures={extraFeatures}
            languages={languages}
          />
        );
      })}
    </li>
  );
}
