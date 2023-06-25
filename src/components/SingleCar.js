import React, {useEffect} from "react";
import { useCars } from "../hooks/useCars";

const SingleCar = ({ carData }) => {
  const { setCurrentCar, selectedCar: currentCar, totalPrice, setTotalPrice } = useCars();
  const numberFormat = (num) => {
    const number = num;
    const formattedNumber = new Intl.NumberFormat().format(number);
    return formattedNumber;
  };

  const handleProductClick = () => {
    if(currentCar === null || currentCar?.id !== carData.id){
      setCurrentCar(carData);
    } else {
      setCurrentCar(null);
    }
  };

  useEffect(() => {
    if(currentCar !== null){
      setTotalPrice(currentCar.initialPrice)
    }
  }, [currentCar, totalPrice])

  console.log(totalPrice);

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
