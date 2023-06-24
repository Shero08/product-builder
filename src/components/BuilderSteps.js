import React from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import "./steps/steps.css";
import { useSteps } from "../hooks/useSteps";

const BuilderSteps = () => {
  const { selectedStep } = useSteps();

  const steps = [StepOne, StepTwo, StepThree, StepFour];

  const Component = steps[selectedStep];

  return (
    <ul className="h-full overflow-hidden">
      <Component />
    </ul>
  );
};

export default BuilderSteps;
