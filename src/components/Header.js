import React from "react";
import { useCars } from "../hooks/useCars";
import { useSteps } from "../hooks/useSteps";

const Header = ({ isDisabled, showDisableAlert }) => {

  const { selectedCar } = useCars();
  const { selectedStep, setCurrentStep, goToPreviousStep } = useSteps();

  return (
    <header>
      <h1>Product Builder</h1>

      <nav className={`${selectedCar ? "" : "disabled"}`}>
        <ul>
          <li className={`inline-block ${selectedStep === 0 ? "active" : ""}`}>
            <a href="#models" onClick={selectedCar ? () => setCurrentStep(0) : showDisableAlert}>
              Models
            </a>
          </li>
          <li className={`inline-block ${selectedStep === 1 ? "active" : ""}`}>
            <a href="#colors" onClick={selectedCar ? () => setCurrentStep(1) : showDisableAlert}>
              Colors
            </a>
          </li>
          <li className={`inline-block ${selectedStep === 2 ? "active" : ""}`}>
            <a href="#accessories" onClick={selectedCar ? () => setCurrentStep(2) : showDisableAlert}>
              Accessories
            </a>
          </li>
          <li className={`inline-block ${selectedStep === 3 ? "active" : ""}`}>
            <a href="#summary" onClick={selectedCar ? () => setCurrentStep(3) : showDisableAlert}>
              Summary
            </a>
          </li>
        </ul>
      </nav>

      <a href="#" className="btn-back">
        Article & Download
      </a>
    </header>
  );
};

export default Header;
