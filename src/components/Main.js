import React from 'react';
import carData from '../json/car.json';
import Header from './Header';
import Footer from './Footer';
import BuilderSteps from './BuilderSteps';

const Main = () => {
    const data = carData;
    console.log(data);

    return (
        <div className='product-builder h-screen overflow-hidden'>
            <Header />    

            <div className='h-full relative overflow-hidden'>
                <BuilderSteps 
                    data={data}
                />
            </div>

            <Footer />
        </div>
    )
}

export default Main