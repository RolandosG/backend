import React,{useContext} from 'react';
import ProductCategoryCard from "../src/components/ProductCategoryCard";
import ProductContext from '../src/context/ProductContext';


const ProductCategoryList = () => {

    const {products} = useContext(ProductContext);

    return (
        <section id="hero-section">

            <div className= "container">

                <h1> Product Categories </h1>

                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

                    {products.map((product,index)=>( <ProductCategoryCard  key={index}  category={product.category}/>))}
                        
                </div>
            </div>
            
        </section>
    )
}

export default ProductCategoryList
