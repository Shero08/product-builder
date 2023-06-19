import React from 'react'

const SingleCar = ({carData}) => {

  console.log(carData);
  return (
    <li>
        <span className='block single-name'>{carData.brand} {carData.model}</span>
        <img className='single-img' src={carData.images[0]} alt={carData.model} />
        <span className='single-price'>from ${carData.initialPrice}</span>
        <div className='radio'></div>
    </li>
  )
}

export default SingleCar