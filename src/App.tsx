import { useState } from 'react';
import './App.css';
import Stepper from './quiz02/Stepper';
import Content from './quiz02/Content';

function App() {
  const [step, setStep] = useState(1);

  const handlePrev = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  return (
    <>
      <h1>Quiz 02</h1>
      <Stepper step={step} setStep={setStep} />
      <Content />
      <div className="flex">
        <button type="button" onClick={handlePrev} disabled={step === 1}>
          Prev
        </button>
        <button type="button" onClick={handleNext} disabled={step === 3}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;