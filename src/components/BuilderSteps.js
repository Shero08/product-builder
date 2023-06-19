import React from 'react'
import SingleCar from './SingleCar'

const BuilderSteps = (props) => {
  return (
    <ul className='h-full overflow-hidden'>
        <li className='product-step'>
            <section>
                <ul className='grid grid-cols-2 gap-12 text-center'>
                    {
                        props && props.data && props.data.map((product, i) => {
                            return <SingleCar key={i} carData={product} />        
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