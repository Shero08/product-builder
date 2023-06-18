import React from 'react'

const Header = () => {
  return (
    <header>
        <h1>Product builder</h1>
        <nav>
          <ul>
            <li className='inline-block'>
              <a href="#models">Models</a>
            </li>
            <li className='inline-block'>
              <a href="#colors">Colors</a>
            </li>
            <li className='inline-block'>
              <a href='#accessories'>Accessories</a>
            </li>
            <li className='inline-block'>
              <a href='#summary'>Summary</a>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header