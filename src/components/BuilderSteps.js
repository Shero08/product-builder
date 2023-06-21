import React from 'react'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const BuilderSteps = ({handleProductSelect, data, selectedProduct}) => {
  return (
    <ul className='h-full overflow-hidden'>
        <StepOne 
            carData={data}
            handleProductSelect={handleProductSelect} 
            selectedProduct={selectedProduct}
        />
        
        {selectedProduct ? (
            <>
                <StepTwo />
                <StepThree />
                <StepFour />
            </>
        ) 
            : ''
        }
        
    </ul>
  )
}

export default BuilderSteps