import React from 'react'
import {Link} from "react-router-dom"

const SpecificCategoryCard = (props) => {
    
    return (
        <div className="product-card-2">
            
                <div className="ProductContents">
                    {props.category && <Link to = {`/products?category=${props.category}`}> <img src={props.image} alt={props.title}/></Link> }

                    
                     <h3>{props.title}</h3> 
                    
                    
                     <h3>${props.price}</h3> 
                    
                </div>
                   
            
        
    </div>
    )
}

export default SpecificCategoryCard
