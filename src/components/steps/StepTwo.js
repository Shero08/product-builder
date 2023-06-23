import React, {useState} from 'react';

const StepTwo = ({selectedProduct}) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const handleColorSelect = (colorIndex) => {
    setSelectedColor(colorIndex)
  }

  return (
    <li className={`product-step`}>
        <section>
            <ul className='previews'>
              {selectedProduct && selectedProduct.images && selectedProduct.images.map((img, i) => {
                return (
                  <li className={selectedColor === i ? 'selected' : ''}>
                    <img key={i} data-img={i} src={img} alt="Product Preview" />
                  </li>
                )
              })}
            </ul>

            <ul className='product-color'>
              {selectedProduct && selectedProduct.colors && selectedProduct.colors.map((color, i) => {
                return (
                  <li className={selectedColor === i ? 'selected' : ''} data-content={`${color.color} - $${color.price}`}  key={i}>
                    <a onClick={() => handleColorSelect(i)} data-color={color.name} href={`#${i}`}>{color.color} - ${color.price}</a>
                  </li>
                )
              })}
            </ul>
        </section>
    </li>
  )
}

export default StepTwo