import * as React from 'react';
import jobData from '../public/fixtures/data.json';
import formatJobJson from './utils';
import FilterCardList from './components/FilterCardList';

function App() {
  return (
    <div>
      <FilterCardList jobData={formatJobJson(jobData)} />
    </div>
  );
}

export default App;
