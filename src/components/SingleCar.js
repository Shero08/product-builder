import React from 'react'

const SingleCar = ({carData, handleProductSelect, selectedProduct}) => {

  const handleProductClick = () => {
    let selected;

    if(selectedProduct === null || selectedProduct?.id !== carData.id){
      selected = carData;
    } else {
      selected = null;
    }

    handleProductSelect(selected);
  }

  console.log(selectedProduct);
  return (
    <li onClick={handleProductClick} className={`${selectedProduct?.id === carData.id ? 'selected loaded' : ''}`}>
        <span className='block single-name'>{carData.brand} {carData.model}</span>
        <img className='single-img' src={carData.images[0]} alt={carData.model} />
        <span className='single-price'>from ${carData.initialPrice}</span>
        <div className='radio'></div>
    </li>
  )
}

export default SingleCar