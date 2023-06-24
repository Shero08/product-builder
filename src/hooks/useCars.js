import { useContext, useState, createContext, useEffect } from "react";
import cars from "../json/car.json";

export const CarContext = createContext({});

export function useCars() {
  return useContext(CarContext);
}

export const CarsProvider = ({ children }) => {
  const [selectedCar, setCurrentCar] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedExtra, setSelectedExtra] = useState([]);

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
        selectedExtra,
        setSelectedExtra,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
