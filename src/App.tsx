import * as React from 'react';
import FilterMain from './components/FilterMain';
import FilterProvider from './context/FilterProvider';

function App() {
  return (
    <FilterProvider>
      <FilterMain />
    </FilterProvider>
  );
}

export default App;
