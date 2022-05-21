/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { useFilters } from '../context/FiltersContext';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background: violet;
  margin-top: 16px;
  margin-bottom: -16px;
  padding-left: 10px;
  border-radius: 5px;

  & > p {
    background-color: pink;
    cursor: pointer;
    margin-right: 16px;
    padding: 10px;
  }

  & > p:last-child {
    margin-left: auto;
  }
`;

const Span = styled.span`
  margin-left: 8px;
`;

export default function Filters() {
  const { filters, setFilters, setChange } = useFilters();
  const deleteFilter = (filter: string) => {
    setFilters((prev) => {
      prev.delete(filter);
      return prev;
    });
    setChange((prev) => !prev);
  };
  const clearFilters = () => {
    setFilters(new Set());
    setChange((prev) => !prev);
  };

  if (filters.size === 0) {
    return null;
  }
  return (
    <Wrapper>
      {Array.from(filters).map((filter) => (
        <p>
          {filter}
          <Span onClick={() => deleteFilter(filter)}>x</Span>
        </p>
      ))}
      <p onClick={clearFilters}> Clear </p>
    </Wrapper>
  );
}
