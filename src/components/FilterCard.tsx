import React from 'react';
import styled from 'styled-components';
import type { FilterCardPropsType } from './FilterCard.types';
import Filterchip from './Filterchip';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-width: 375px;
  padding: 4px;
  padding-left: 32px;
  border-radius: 10px;
  color: hsl(180, 29%, 50%);
  background-color: white;
  margin-bottom: 16px;
  cursor: pointer;

  & > div:nth-child(3) {
    margin-top: -56px;
    margin-left: auto;
    width: fit-content;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
  & > p {
    margin-right: 8px;
  }
`;

const LanguageWrapper = styled.div`
  display: inline-flex;
  background-color: white;
  flex-direction: row;
  padding: 10px;

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
  languages,
}: FilterCardPropsType) {
  return (
    <Wrapper>
      <div>
        <h3>{companyName}</h3>
      </div>
      <h3>{title}</h3>
      <LanguageWrapper>
        {languages.map((language) => (
          <Filterchip value={language} />
        ))}
      </LanguageWrapper>
      <BottomWrapper>
        <p>{jobLocation}</p>
        <p>{jobType}</p>
        <p>{timePassed}</p>
      </BottomWrapper>
    </Wrapper>
  );
}
