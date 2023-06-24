import React from "react";
import { useCars } from "../hooks/useCars";
import { useSteps } from "../hooks/useSteps";

const Header = ({ isDisabled, showDisableAlert }) => {
  const { selectedCar } = useCars();

  const { selectedStep, setCurrentStep, goToPreviousStep } = useSteps();

  const handleClickDisabled = (step) => {
    if (!isDisabled && selectedCar === null) {
      showDisableAlert();
    } else setCurrentStep(step);
  };

  return (
    <header>
      <h1>Product Builder</h1>

      <nav className={`${selectedCar ? "" : "disabled"}`}>
        <ul>
          <li className={`inline-block ${selectedStep === 0 ? "active" : ""}`}>
            <a onClick={() => handleClickDisabled(0)} href="#models">
              Models
            </a>
          </li>
          <li className={`inline-block ${selectedStep === 1 ? "active" : ""}`}>
            <a onClick={() => handleClickDisabled(1)} href="#colors">
              Colors
            </a>
          </li>
          <li className={`inline-block ${selectedStep === 2 ? "active" : ""}`}>
            <a onClick={() => handleClickDisabled(2)} href="#accessories">
              Accessories
            </a>
          </li>
          <li className={`inline-block ${selectedStep === 3 ? "active" : ""}`}>
            <a onClick={() => handleClickDisabled(3)} href="#summary">
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
