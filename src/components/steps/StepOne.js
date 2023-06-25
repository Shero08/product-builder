import React from "react";
import SingleCar from "../SingleCar";
import { useCars } from "../../hooks/useCars";
import HeaderResponsive from "../HeaderResponsive";

const StepOne = () => {
  const { cars } = useCars();
  return (
    <li className={`product-step active`} key={'step-1'}>
      <section>
        <HeaderResponsive />

        <ul className="grid grid-cols md:grid-cols-2 gap-x-20 gap-y-2 text-center options">
          {cars &&
            cars.map((product, i) => {
              return <SingleCar key={i} carData={product} />;
            })}
        </ul>
      </section>
    </li>
  );
};

export default StepOne;
