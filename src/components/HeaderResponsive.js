import React from 'react'
import { useSteps } from '../hooks/useSteps';

const HeaderResponsive = () => {
  const {selectedStep} = useSteps();

  const title = ['Select Model', 'Select Color', 'Accessories', 'Summary']

  return (
    <>
    <header className='sub-header'>
        <h1>{title[selectedStep]}</h1>
        <span className='step-indicator'>
            Step {selectedStep + 1} of 4
        </span>
    </header>

    {selectedStep === 0 
    ? <a className='btn-back' href='#'>Article & Download</a>
    : null
    }
    </>
  )
}

export default HeaderResponsive