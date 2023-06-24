import { useContext, useState, createContext, useEffect } from "react";
import cars from "../json/car.json";

export const CarContext = createContext({
  cars,
  selectedCar: null,
  setCurrentCar: () => {},
  selectedColor: null,
  setSelectedColor: () => {},
  selectedExtra: [],
  setSelectedExtra: () => {},
});

export function useCars() {
  return useContext(CarContext);
}

export const CarsProvider = ({ children }) => {
  const [selectedCar, setCurrentCar] = useState();
  const [selectedColor, setSelectedColor] = useState();
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
