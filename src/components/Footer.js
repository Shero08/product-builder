import React from "react";
import { useCars } from "../hooks/useCars";
import { useSteps } from "../hooks/useSteps";

const Footer = ({ isDisabled }) => {
  const { selectedCar } = useCars();
  const { selectedStep, setCurrentStep, goToPreviousStep } = useSteps();

  return (
    <footer
      className={`${selectedCar ? "" : "disabled"} ${
        isDisabled ? "show-alert" : ""
      }`}
    >
      <div className="selected-product">
        <img src={selectedCar?.images[0]} alt="Product preview" />
        <div className="tot-price">
          <span>Total</span>
          <span className="total">
            ${selectedCar ? selectedCar?.initialPrice : 0}
          </span>
        </div>
      </div>

      <nav className="footer-nav">
        <ul>
          <li className="nav-item next">
            <ul>
              <li className={selectedStep === 0 ? "visible" : ""}>
                <a href="#0" onClick={() => setCurrentStep(1)}>
                  Colors
                </a>
              </li>
              <li className={selectedStep === 1 ? "visible" : ""}>
                <a href="#1" onClick={() => setCurrentStep(2)}>
                  Accessories
                </a>
              </li>
              <li className={selectedStep === 2 ? "visible" : ""}>
                <a href="#2" onClick={() => setCurrentStep(3)}>
                  Summary
                </a>
              </li>
              <li className={selectedStep === 3 ? "visible" : ""}>
                <a href="#2" onClick={() => setCurrentStep(4)}>
                  Buy Now
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item prev" onClick={() => goToPreviousStep()}></li>
        </ul>
      </nav>

      <span className="alert">Please, select a model first!</span>
    </footer>
  );
};

export default Footer;
