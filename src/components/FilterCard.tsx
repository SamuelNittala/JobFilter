import React from 'react';
import styled from 'styled-components';
import type { FilterCardPropsType } from './FilterCard.types';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-width: 375px;
  padding: 4px;
  border-radius: 10px;
  background-color: red;
  margin-bottom: 16px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;

  & > p {
    margin-right: 8px;
  }
`;

export default function FilterCard({
  jobLocation,
  jobType,
  timePassed,
  title,
  companyName,
}: FilterCardPropsType) {
  return (
    <Wrapper>
      <div>
        <h3>{companyName}</h3>
      </div>
      <h3>{title}</h3>
      <BottomWrapper>
        <p>{jobLocation}</p>
        <p>{jobType}</p>
        <p>{timePassed}</p>
      </BottomWrapper>
    </Wrapper>
  );
}
