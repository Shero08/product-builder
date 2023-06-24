import React from "react";
import { useCars } from "../hooks/useCars";

const SingleCar = ({ carData }) => {
  const { setCurrentCar, selectedCar: currentCar } = useCars();
  const numberFormat = (num) => {
    const number = num;
    const formattedNumber = new Intl.NumberFormat().format(number);
    return formattedNumber;
  };

  const handleProductClick = () => {
    setCurrentCar(carData);
  };

  return (
    <li
      onClick={handleProductClick}
      className={`${currentCar?.id === carData.id ? "selected loaded" : ""}`}
    >
      <span className="block single-name">
        {carData.brand} {carData.model}
      </span>
      <img className="single-img" src={carData.images[0]} alt={carData.model} />
      <span className="single-price">
        from ${numberFormat(carData.initialPrice)}
      </span>
      <div className="radio"></div>
    </li>
  );
};

export default SingleCar;
