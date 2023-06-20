import React from 'react'
import SingleCar from './SingleCar'

const BuilderSteps = ({handleProductSelect, data, selectedProduct}) => {
  return (
    <ul className='h-full overflow-hidden'>
        <li className={`product-step active`}>
            <section>
                <ul className='grid grid-cols-2 gap-12 text-center'>
                    {
                        data && data.map((product, i) => {
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
        <li className='product-step'>
            <section></section>
        </li>
        <li className='product-step'>
            <section></section>
        </li>
        <li className='product-step'>
            <section></section>
        </li>
    </ul>
  )
}

export default BuilderSteps