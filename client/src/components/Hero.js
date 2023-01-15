import React,{useContext} from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import ProductContext from '../context/ProductContext';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import {Link} from "react-router-dom"




const Hero = () => {

    const {products} = useContext(ProductContext);
    
    return (
        <div className= "container">
          <div className= "hero-img">
          <h1> Splide Section </h1>
        <Splide>
        {products.map((product,index)=>( <SplideSlide> <Link to = {`/products/details/${product._id}`}>
          <img src={product.product_photo} alt={product.title}/> </Link>
          {product.product_name}
          </SplideSlide>) 
          )}
        </Splide>
      </div>
      </div>
    )
}
export default Hero
