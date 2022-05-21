import React from 'react';
import styled from 'styled-components';
import { useFilters } from '../context/FiltersContext';

type PropsType = {
  value: string;
};

const Button = styled.button`
  background-color: pink;
  padding: 10px;
  margin-right: 16px;
  border-radius: 4px;
`;

export default function Filterchip({ value }: PropsType) {
  const { setFilters, setChange } = useFilters();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonElement = e.currentTarget;
    if (!buttonElement) return;
    setFilters((prev: Set<string>) => prev.add(buttonElement.value));
    setChange((prev) => !prev);
  };

  return (
    <Button type="button" onClick={handleClick} value={value}>
      {value}
    </Button>
  );
}
