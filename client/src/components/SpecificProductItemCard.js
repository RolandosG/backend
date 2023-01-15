import React from 'react'
import {Link} from "react-router-dom"

const SpecificProductItemCard = (props) => {
    
    return (
        <div className="product-card-2">
            
                <div className="ProductContents">
                    {props.best===true && <Link to = {`/products/details/${props.id}`}> <img src={props.image} alt={props.title}/></Link> }

                    {props.best===true &&
                     <h3>{props.title}</h3> 
                    }
                    
                    {props.best===true &&
                     <h3>${props.price}</h3> 
                    }
                </div>
                   
            
        
    </div>
    )
}

export default SpecificProductItemCard
