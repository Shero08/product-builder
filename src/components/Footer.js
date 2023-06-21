import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='selected-product'>
            <img src='https://codyhouse.co/demo/product-builder/img/product01_col01.jpg' alt='product-thumbnail' />
            <div className='tot-price'>
              <span>Total</span>
              <span className='total'>
                $0
              </span> 
            </div>
        </div>

        <nav className='footer-nav'>
          <ul>
            <li className='nav-item next'></li> 
            <li className='nav-item prev'></li>
          </ul>
        </nav>
    </footer>
  )
}

export default Footer