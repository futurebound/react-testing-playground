import { useState } from 'react';
import './App.css';

function App() {
  const [heading, setHeading] = useState('Magnificent Monkeys');

  const clickHandler = () => {
    setHeading('Radical Rhinos');
  };

  const doNotClickHandler = () => {
    setHeading('serious why i said do not');
  };

  return (
    <>
      <button type='button' onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
      <button type='button' onClick={doNotClickHandler}>
        Do NOT Click Me
      </button>
    </>
  );
}

export default App;
