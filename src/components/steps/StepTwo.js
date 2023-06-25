import React from "react";
import { useCars } from "../../hooks/useCars";
import HeaderResponsive from "../HeaderResponsive";

const StepTwo = () => {
  const {
    selectedCar: currentCar,
    selectedColor,
    setSelectedColor,
    setTotalPrice
  } = useCars();

  const handleColorSelected = (colorIndex) => {
    setSelectedColor(colorIndex)

    setTotalPrice(currentCar.initialPrice + currentCar?.colors[colorIndex].price)
  }

  return (
    <li className={`product-step active`}>
      <section key={'step2'}>
        <HeaderResponsive />

        <ul className="previews">
          {currentCar &&
            currentCar.images &&
            currentCar.images.map((img, i) => {
              return (
                <li className={selectedColor === i ? "selected" : ""} key={i}>
                  <img key={i} data-img={i} src={img} alt="Product Preview" />
                </li>
              );
            })}
        </ul>

        <ul className="product-color">
          {currentCar &&
            currentCar.colors &&
            currentCar.colors.map((color, i) => {
              return (
                <li
                  className={selectedColor === i ? "selected" : ""}
                  data-content={`${color.color} - $${color.price}`}
                  key={i}
                >
                  <a
                    onClick={() => handleColorSelected(i)}
                    data-color={color.name}
                    href={`#${i}`}
                  >
                    {color.color} - ${color.price}
                  </a>
                </li>
              );
            })}
        </ul>
      </section>
    </li>
  );
};

export default StepTwo;
