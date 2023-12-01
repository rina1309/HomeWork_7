import React, { useMemo, useState } from 'react';

const ExpensiveCalculationComponent = ({ data }) => {
  const sum = useMemo(() => {
    console.log('Recalculating sum...');
    return data.reduce((acc, number) => acc + number, 0);
  }, [data]);

  return (
    <div>
      <p>Sum: {sum}</p>
    </div>
  );
};

const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <ExpensiveCalculationComponent data={numbers} />
      <button onClick={() => setNumbers([...numbers, Math.random() * 10])}>
        Add Number
      </button>
    </div>
  );
};

export default App;

