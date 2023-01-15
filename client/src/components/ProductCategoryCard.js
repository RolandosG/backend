import React from 'react'
import {Link} from "react-router-dom"
import Shoes from '../assets/img/ShoeCategory.png';
import Space from '../assets/img/space.jpeg';
import Outdoor from '../assets/img/outdoor.jpg';


const ProductCategoryCard = (props) => {
    
    

    return (
        <div className="category-card">

         
           <div className="ProductContent">
                
                <p> 
                    
                    {props.category === 'shoes' && <Link to = {`/products?category=${props.category}`}> 
                     <img src={Shoes} alt={props.title}/>   
                    </Link> }
                    
                    {props.category === 'space' && <Link to = {`/products?category=${props.category}`}> 
                     <img src={Space} alt={props.title}/>   
                    </Link> }

                    {props.category === 'outdoor supplies' && <Link to = {`/products?category=${props.category}`}> 
                     <img src={Outdoor} alt={props.title}/>   
                    </Link> }
                    <h6>{props.category}</h6>
                </p>

            </div> 

    </div>
    )
}

export default ProductCategoryCard
