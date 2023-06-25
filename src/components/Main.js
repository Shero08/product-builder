import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BuilderSteps from "./BuilderSteps";

import { useCars } from "../hooks/useCars";

const Main = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { cars, setCurrentCar, currentCar } = useCars();

  const showDisableAlert = () => {
    setIsDisabled(!isDisabled);
  };

  console.log("main", { cars, currentCar });

  return (
    <div className="product-builder h-screen overflow-hidden">
      <Header showDisableAlert={showDisableAlert} isDisabled={isDisabled} />

      <div className="h-full relative overflow-hidden">
        <BuilderSteps />
      </div>

      <Footer showDisableAlert={showDisableAlert} isDisabled={isDisabled} />
    </div>
  );
};

export default Main;
