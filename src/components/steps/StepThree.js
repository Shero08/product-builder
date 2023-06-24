import React from "react";
import { useCars } from "../../hooks/useCars";

const StepThree = () => {
  const { selectedCar } = useCars();
  return (
    <li className={`product-step active`} key={'step-3'}>
      <section>
        <ul className="accessories">
          {selectedCar &&
            selectedCar.accessories &&
            selectedCar.accessories.map((option, i) => {
              return (
                <li className="a-option" key={i}>
                  <p>{option.name}</p>
                  <span className="price">${option.price}</span>
                  <div className="check"></div>
                </li>
              );
            })}
        </ul>
      </section>
    </li>
  );
};

export default StepThree;
