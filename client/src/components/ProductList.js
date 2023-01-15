import React,{useContext} from 'react';
import ProductItemCard from "./ProductItemCard";
import ProductContext from '../context/ProductContext';


const ProductList = () => {

    const {products} = useContext(ProductContext);

    return (
        <section id="section-product-list">

            <div className= "container">

                <h1>Featured product</h1>

                <div className="grid-best grid-best-gap-1 grid-best-row-gap-2 grid-best-col-4">
                

                    {products.map((product,index)=>( <ProductItemCard   id={product._id} title={product.product_name} image={product.product_photo} price={product.product_price} best={product.best_seller} desc={product.description} category={product.category}/>))}
                        
                </div>
            </div>
            
        </section>
    )
}

export default ProductList
