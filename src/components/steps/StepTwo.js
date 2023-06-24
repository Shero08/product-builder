import React from "react";
import { useCars } from "../../hooks/useCars";

const StepTwo = () => {
  const {
    selectedCar: currentCar,
    selectedColor,
    setSelectedColor,
  } = useCars();

  return (
    <li className={`product-step active`}>
      <section>
        <ul className="previews">
          {currentCar &&
            currentCar.images &&
            currentCar.images.map((img, i) => {
              return (
                <li className={selectedColor === i ? "selected" : ""}>
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
                    onClick={() => setSelectedColor(i)}
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
