interface StepperProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Stepper: React.FC<StepperProps> = ({ step, setStep }) => {
  return (
    <div className="stepper flex">
      <h2 className={step === 1 ? 'active' : ''} onClick={() => setStep(1)}>
        1
      </h2>
      <h2 className={step === 2 ? 'active' : ''} onClick={() => setStep(2)}>
        2
      </h2>
      <h2 className={step === 3 ? 'active' : ''} onClick={() => setStep(3)}>
        3
      </h2>
    </div>
  );
};

export default Stepper;

