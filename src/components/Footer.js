import React from "react";
import { useCars } from "../hooks/useCars";
import { useSteps } from "../hooks/useSteps";

const Footer = ({ isDisabled, showDisableAlert }) => {
  const { cars, selectedCar, selectedColor, totalPrice, setTotalPrice } = useCars();
  const { selectedStep, setCurrentStep, goToPreviousStep } = useSteps();

  const handlePrevClick = () => {
    goToPreviousStep()
  }

  return (
    <footer
      className={`${selectedCar ? "" : "disabled"} ${
        isDisabled ? "show-alert" : ""
      }`}
    >
      <div className="selected-product">
        <img src={selectedCar ? selectedCar.images[selectedColor] : cars[0].images[0]} alt="Product preview" />
        <div className="tot-price">
          <span>Total</span>
          <span className="total">
            ${selectedCar ? totalPrice : 0}
          </span>
        </div>
      </div>

      <nav className="footer-nav">
        <ul>
          <li className="nav-item next">
            <ul>
              <li className={selectedStep === 0 ? "visible" : ""}>
                <a href="#0" onClick={selectedCar ? () => setCurrentStep(1) : showDisableAlert}>
                  Colors
                </a>
              </li>
              <li className={selectedStep === 1 ? "visible" : ""}>
                <a href="#1" onClick={selectedCar ? () => setCurrentStep(2) : null}>
                  Accessories
                </a>
              </li>
              <li className={selectedStep === 2 ? "visible" : ""}>
                <a href="#2" onClick={selectedCar ? () => setCurrentStep(3) : null}>
                  Summary
                </a>
              </li>
              <li className={selectedStep === 3 ? "visible" : ""}>
                <a href="#3">
                  Buy Now
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item prev">
          <ul>
              <li className={selectedStep === 0 ? "visible step-1" : "visited"}>
                <a href="#0">
                  Colors
                </a>
              </li>
              <li className={selectedStep === 1 ? "visible" : ""}>
                <a href="#1" onClick={handlePrevClick}>
                  Accessories
                </a>
              </li>
              <li className={selectedStep === 2 ? "visible" : ""}>
                <a href="#2" onClick={() => goToPreviousStep()}>
                  Summary
                </a>
              </li>
              <li className={selectedStep === 3 ? "visible" : ""}>
                <a href="#3" onClick={() => goToPreviousStep()}>
                  Buy Now
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <span className="alert">Please, select a model first!</span>
    </footer>
  );
};

export default Footer;
