import { useContext, useState, createContext } from "react";

export const StepContext = createContext({
  selectedStep: 0,
  goToNextStep: () => {},
  goToPreviousStep: () => {},
  setCurrentStep: () => {},
});

export function useSteps() {
  return useContext(StepContext);
}

export const StepsProvider = ({ children }) => {
  const [selectedStep, setCurrentStep] = useState(0);
  console.log("selectedStep", selectedStep);

  const goToNextStep = () => {
    setCurrentStep(selectedStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(selectedStep - 1);
  };

  return (
    <StepContext.Provider
      value={{
        selectedStep,
        goToNextStep,
        goToPreviousStep,
        setCurrentStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
