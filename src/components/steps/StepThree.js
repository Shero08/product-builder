import React from "react";
import { useCars } from "../../hooks/useCars";
import HeaderResponsive from "../HeaderResponsive";

const StepThree = () => {
  const { selectedCar, selectedAccessories, setSelectedAccessories, totalPrice, setTotalPrice } = useCars();

  const handleSelectAccessories = (accessories) => {
    if (selectedAccessories.some(accessory => accessory.name === accessories.name)) {
      setSelectedAccessories(selectedAccessories.filter(accessory => accessory.name !== accessories.name));
      setTotalPrice(totalPrice - accessories.price)
    } else {
      setSelectedAccessories([...selectedAccessories, accessories]);
      setTotalPrice(totalPrice + accessories.price)
    }
  }

  console.log(selectedAccessories);
  console.log(totalPrice);

  return (
    <li className={`product-step active`} key={'step-3'}>
      <section>
        <HeaderResponsive />

        <ul className="accessories">
          {selectedCar &&
            selectedCar.accessories &&
            selectedCar.accessories.map((option, i) => {
              return (
                <li 
                  className={`a-option ${selectedAccessories.some(accessory => accessory.name === option.name) ? 'selected' : ''}`}
                  key={i} 
                  onClick={() => handleSelectAccessories({ name: option.name, price: option.price })}
                >
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
