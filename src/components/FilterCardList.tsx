import React from 'react';
import styled from 'styled-components';
import FilterCard from './FilterCard';
import type { FilterCardPropsType } from './FilterCard.types';

type PropType = {
  jobData: Array<FilterCardPropsType>;
};

const Wrapper = styled.div`
  margin-top: 16px;
`;

export default function FilterCardList({ jobData }: PropType) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
