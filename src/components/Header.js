import React from 'react'

const Header = ({selectedProduct, isDisabled, showDisableAlert}) => {
  const handleClickDisabled = () => {
    if(!isDisabled && selectedProduct === null){
      showDisableAlert()
    }
  }

  return (
    <header>
        <h1>Product Builder</h1>

        <nav className={`${selectedProduct ? '' : 'disabled'}`}>
          <ul>
            <li className='inline-block active'>
              <a onClick={handleClickDisabled} href="#models">Models</a>
            </li>
            <li className='inline-block'>
              <a onClick={handleClickDisabled} href="#colors">Colors</a>
            </li>
            <li className='inline-block'>
              <a onClick={handleClickDisabled} href='#accessories'>Accessories</a>
            </li>
            <li className='inline-block'>
              <a onClick={handleClickDisabled} href='#summary'>Summary</a>
            </li>
          </ul>
        </nav>

        <a href='#' className='btn-back'>Article & Download</a>
    </header>
  )
}

export default Header