import React, {useState} from 'react'
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import './steps/steps.css';

const BuilderSteps = ({handleProductSelect, data, selectedProduct}) => {
    const [buildedProduct, setBuildedProduct] = useState([]);

  return (
    <ul className='h-full overflow-hidden'>
        <StepOne 
            carData={data}
            handleProductSelect={handleProductSelect} 
            selectedProduct={selectedProduct}
        />
        
        {selectedProduct ? (
            <>
                <StepTwo 
                    selectedProduct={selectedProduct}
                />
                <StepThree 
                    selectedProduct={selectedProduct}
                />
                <StepFour />
            </>
        ) 
            : ''
        }
        
    </ul>
  )
}

export default BuilderSteps