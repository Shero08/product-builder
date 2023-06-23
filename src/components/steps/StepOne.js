import React from 'react';
import SingleCar from '../SingleCar'

const StepOne = ({handleProductSelect, carData, selectedProduct}) => {
  return (
    <li className={`product-step`}>
        <section>
            <ul className='grid grid-cols-2 gap-12 text-center options'>
                {
                    carData && carData.map((product, i) => {
                        return (
                            <SingleCar 
                                key={i} 
                                carData={product}
                                handleProductSelect={handleProductSelect} 
                                selectedProduct={selectedProduct}
                            />)    
                    })
                }
            </ul>
        </section>
    </li>
  )
}

export default StepOne