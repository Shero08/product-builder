import React, {useState, useEffect} from 'react';
import carData from '../json/car.json';
import Header from './Header';
import Footer from './Footer';
import BuilderSteps from './BuilderSteps';

const Main = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    };

    const showDisableAlert = () => {
        setIsDisabled(!isDisabled);
    }
    
    const data = carData;
    console.log(data);

    useEffect(() => {
        console.log(selectedProduct)
        console.log(isDisabled);
        
    }, [selectedProduct, isDisabled])

    return (
        <div className='product-builder h-screen overflow-hidden'>
            <Header
                selectedProduct={selectedProduct}
                showDisableAlert={showDisableAlert}
                isDisabled={isDisabled}
            />    

            <div className='h-full relative overflow-hidden'>
                <BuilderSteps 
                    data={data}
                    handleProductSelect={handleProductSelect}
                    selectedProduct={selectedProduct}
                />
            </div>

            <Footer 
                isDisabled={isDisabled}
                selectedProduct={selectedProduct}
            />
        </div>
    )
}

export default Main