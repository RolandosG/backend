import React,{useContext} from 'react';
import ProductCategoryCard from "./ProductCategoryCard";
import ProductContext from "../context/ProductContext";


const ProductCategoryList = () => {
    
    const {products} = useContext(ProductContext);

    return (
        <section id="section-product-list">

            <div className= "container">
            
                <h1>Products Categories</h1>

                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

                    {products.map((product,index)=>( <ProductCategoryCard  key={index} category={product.category}/>))}
                        
                </div>
                
            </div>
            
        </section>
    )
}

export default ProductCategoryList
