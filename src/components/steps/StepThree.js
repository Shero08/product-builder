import React from "react";
import { useCars } from "../../hooks/useCars";

const StepThree = () => {
  const { selectedCar } = useCars();
  return (
    <li className={`product-step active`}>
      <section>
        <ul className="accessories">
          {selectedCar &&
            selectedCar.accessories &&
            selectedCar.accessories.map((option) => {
              return (
                <li className="a-option">
                  <p>{option.name}</p>
                  <span class="price">${option.price}</span>
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
