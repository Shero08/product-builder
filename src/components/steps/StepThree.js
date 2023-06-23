import React from 'react';

const StepThree = ({selectedProduct}) => {
  return (
    <li className={`product-step active`}>
        <section>
            <ul className='accessories'>
              {selectedProduct && selectedProduct.accessories && selectedProduct.accessories.map((option) => {
                return (
                  <li className='a-option'>
                    <p>{option.name}</p>
                    <span class="price">${option.price}</span>
                    <div className='check'></div>
                  </li>
                )
              })}
            </ul>
        </section>
    </li>
  )
}

export default StepThree