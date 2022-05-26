import React from 'react';
import styled from 'styled-components';
import FilterCard from './FilterCard';
import type { FilterCardPropsType } from './FilterCard.types';

type PropType = {
  jobData: Array<FilterCardPropsType>;
};

const Wrapper = styled.div`
  margin-top: 56px;
`;

export default function FilterCardList({ jobData }: PropType) {
  return (
    <Wrapper>
      {jobData.map((job) => {
        const {
          companyName,
          jobLocation,
          jobType,
          timePassed,
          title,
          extraFeatures,
          filters,
          logo,
        } = job;
        return (
          <FilterCard
            companyName={companyName}
            jobLocation={jobLocation}
            jobType={jobType}
            logo={logo}
            timePassed={timePassed}
            title={title}
            extraFeatures={extraFeatures}
            filters={filters}
          />
        );
      })}
    </Wrapper>
  );
}
