import React from 'react';
import { useCars } from "../../hooks/useCars";
import HeaderResponsive from '../HeaderResponsive';

const StepFour = () => {
  const { selectedCar, selectedColor, selectedAccessories } = useCars();

  return (
    <li className={`product-step active`} key={'step-4'}>
        <section>
            <HeaderResponsive />

            <ul className='summary'>
                <li>
                  <h2>Model</h2>
                  <img className='product-preview' src={selectedCar.images[selectedColor]} alt="Product Preview" />
                  <h3>{selectedCar.brand} {selectedCar.model}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum. </p>
                </li>

                <li>
                  <h2>Color</h2>
                  <span className='summary-color'>
                    <em className='color-swatch' data-color={selectedCar.colors[selectedColor].name}></em>
                    <em className='color-label'>{selectedCar.colors[selectedColor].color} - ${selectedCar.colors[selectedColor].price}</em>

                  </span>
                </li>

                <li>
                  <h2>Accessories</h2>
                  <ul className='summary-accessories'>
                    {selectedAccessories.length > 0 ? (
                      selectedAccessories.map((accessory, i) => (
                        <li key={i}><p>{accessory.name}</p></li>
                      ))
                    ) : (
                        <li><p>No Accessories selected;</p></li>
                    )}
                  </ul>
                </li>
            </ul>
        </section>
    </li>
  )
}

export default StepFour