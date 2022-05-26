/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { EXTRA } from '../utils';
import type { FilterCardPropsType } from './FilterCard.types';
import Filterchip from './Filterchip';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 375px;
  padding-left: 32px;
  border-radius: 10px;
  color: hsl(180, 29%, 50%);
  background-color: white;
  margin-bottom: 16px;
  cursor: pointer;
  box-shadow: 10px 10px 19px -3px rgba(91, 164, 164, 0.75);
  -webkit-box-shadow: 10px 10px 19px -3px rgba(91, 164, 164, 0.75);
  -moz-box-shadow: 10px 10px 19px -3px rgba(91, 164, 164, 0.75);

  & > img {
    flex-direction: row;
    width: 80px;
    height: 80px;
    border-radius: 50%;
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
  background-color: white;
  flex-direction: row;
  padding: 10px;
  margin-left: auto;
  margin-top: 24px;
  & > p {
    margin-right: 8px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  margin-left: 10px;
  margin-bottom: 0;
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & > p {
    margin-bottom: -2px;
    margin-right: 16px;
    margin-top: 40px;
  }
`;

const TitleCard = styled.p`
  font-weight: bold;
  padding: 8px;
`;

const NewFilterCard = styled.p`
  padding: 8px;
  background-color: hsl(180, 29%, 50%);
  color: white;
  font-size: 17px;
  border-radius: 16px;
`;

const FeatureFilterCard = styled.p`
  background-color: black;
  padding: 8px;
  color: white;
  font-size: 17px;
  border-radius: 16px;
`;
export default function FilterCard({
  jobLocation,
  jobType,
  timePassed,
  title,
  companyName,
  languages,
  extraFeatures,
  logo,
}: FilterCardPropsType) {
  return (
    <Wrapper>
      <img src={`.${logo}`} alt="company-logo" />
      <RowWrapper>
        <UpperWrapper>
          <TitleCard>{companyName}</TitleCard>
          {extraFeatures?.map((feature) => {
            if (feature === EXTRA.NEW) {
              return <NewFilterCard>{feature}</NewFilterCard>;
            }
            if (feature === EXTRA.FEATURED) {
              return <FeatureFilterCard>{feature}</FeatureFilterCard>;
            }
            return null;
          })}
        </UpperWrapper>
        <h3 style={{ fontSize: '24px', marginBottom: 0, marginTop: 16 }}>{title}</h3>
        <BottomWrapper>
          <p>{jobLocation}</p>
          <p>{jobType}</p>
          <p>{timePassed}</p>
        </BottomWrapper>
      </RowWrapper>
      <LanguageWrapper>
        {languages.map((language) => (
          <Filterchip value={language} />
        ))}
      </LanguageWrapper>
    </Wrapper>
  );
}
