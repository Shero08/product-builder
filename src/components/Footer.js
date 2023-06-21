import React from 'react'

const Footer = ({isDisabled, selectedProduct}) => {
  return (
    <footer className={`${selectedProduct ? '' : 'disabled'} ${isDisabled ? 'show-alert' : ''}`}>
        <div className='selected-product'>
            <img src={selectedProduct?.images[0]} alt='Product preview' />
            <div className='tot-price'>
              <span>Total</span>
              <span className='total'>
                ${selectedProduct ? selectedProduct?.initialPrice : 0}
              </span> 
            </div>
        </div>

        <nav className='footer-nav'>
          <ul>
            <li className='nav-item next'>
              <ul>
                <li className='visible'><a href='#0'>Colors</a></li>
                <li><a href='#0'>Accessories</a></li>
                <li><a href='#0'>Summary</a></li>
                <li><a href='#0'>Buy Now</a></li>
              </ul>
            </li> 
            <li className='nav-item prev'></li>
          </ul>
        </nav>

        <span className='alert'>Please, select a model first!</span>
    </footer>
  )
}

export default Footer