import { useContext, useState, createContext } from "react";

export const StepContext = createContext({});

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
    if(selectedStep > 0){
      setCurrentStep(selectedStep - 1); 
    }
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
