import React from 'react';
import { useCars } from "../../hooks/useCars";

const StepFour = () => {
  const { selectedCar, selectedColor } = useCars();

  return (
    <li className={`product-step active`} key={'step-4'}>
        <section>
            <ul className='summary'>
                <li>
                  <h2>Model</h2>
                  <img src={selectedCar.images[selectedColor]} alt="Product Preview" />
                  <h3>{selectedCar.brand} {selectedCar.model}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum. </p>
                </li>

                <li></li>

                <li></li>
            </ul>
        </section>
    </li>
  )
}

export default StepFour