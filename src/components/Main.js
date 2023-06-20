import React, {useState, useEffect} from 'react';
import carData from '../json/car.json';
import Header from './Header';
import Footer from './Footer';
import BuilderSteps from './BuilderSteps';

const Main = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    };
    
    const data = carData;
    console.log(data);

    useEffect(() => {
        console.log(selectedProduct)
    }, [selectedProduct])

    return (
        <div className='product-builder h-screen overflow-hidden'>
            <Header
                selectedProduct={selectedProduct}
            />    

            <div className='h-full relative overflow-hidden'>
                <BuilderSteps 
                    data={data}
                    handleProductSelect={handleProductSelect}
                    selectedProduct={selectedProduct}
                />
            </div>

            <Footer />
        </div>
    )
}

export default Main