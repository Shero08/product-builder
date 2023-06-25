import React from 'react'
import useSteps from '../hooks/useSteps';

const HeaderResponsive = () => {
  return (
    <>
    <header className='sub-header'>
        <h1>Select Model</h1>
        <span className='step-indicator'>
            Step 1 of 4
        </span>
    </header>

    <a className='btn-back' href='#'>Article & Download</a>
    </>
  )
}

export default HeaderResponsive