import React, { useCallback, useState } from 'react';

const ClickCounter = ({ onClick }) => {
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    onClick();
  }, [onClick]);

  return <button onClick={handleClick}>Click me</button>;
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ClickCounter onClick={handleButtonClick} />
    </div>
  );
};

export default App;
