import React from 'react'
import {Link} from "react-router-dom"

const ProductItemCard = (props) => {
    
    return (
        <div className="best-product-card">
            
                <div className="ProductContents"><Link to = {`/products/details/${props.id}`}> <img src={props.image} alt={props.title}/></Link> 

                <h3>{props.title}</h3> 
                <h3>${props.price}</h3>   
                </div>
    </div>
    )
}

export default ProductItemCard
