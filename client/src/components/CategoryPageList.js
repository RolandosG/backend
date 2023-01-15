import {useEffect,useContext} from "react";
import React,{useState} from'react';
import BestProductItemCard from '../src/components/BestProductItemCard';
const BestProductList = () => {
    const [BestProducts , setBestProducts] = useState([{}]);

        
        useEffect(()=>{
      
      
          //GET, POST,PUT, DELETE from our Front-End TO our Back
      
          fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?category=shoes`)
          .then(response=>response.json())
          .then(json=>{
      
                
                setBestProducts(json.data)
      
          })
          .catch(err=>{
              console.log(`Error ${err}`)
          })
          
},[])

    return (
        
        <section id="section-product-list">

            <div className= "container">

                <h1>Best Products</h1>
            
                <div className="grid-best grid-best-gap-1 grid-best-row-gap-2 grid-best-col-4">
                
                    {BestProducts.map((product,index)=>( <BestProductItemCard  key={index} id={product._id} title={product.product_name} image={product.product_photo} price={product.product_price} best={product.best_seller ? true : false} desc={product.description} category={product.category}/>))}
                    
                </div>
              
            </div>
            
        </section>
        
    )
}

export default BestProductList
