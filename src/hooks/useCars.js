import { useContext, useState, createContext, useEffect } from "react";
import cars from "../json/car.json";

export const CarContext = createContext({});

export function useCars() {
  return useContext(CarContext);
}

export const CarsProvider = ({ children }) => {
  const [selectedCar, setCurrentCar] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [totalPrice, setTotalPrice] = useState(selectedCar?.initialPrice);

  useEffect(() => {
    console.log("selectedCar", selectedCar);
  }, [selectedCar]);

  return (
    <CarContext.Provider
      value={{
        cars,
        selectedCar,
        setCurrentCar,
        selectedColor,
        setSelectedColor,
        selectedAccessories,
        setSelectedAccessories,
        totalPrice,
        setTotalPrice
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
