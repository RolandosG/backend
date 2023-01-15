import React from 'react'
import {Link} from "react-router-dom"
const BestProductItemCard = (props) => {
    
return (


<div className="best-product-card">

         
<div className="ProductContent">
         
   
  
     <p>
      {props.best===true && <Link to = {`/products/details/${props.id}`}> <img src={props.image} alt={props.title}/></Link> }
          
                <p>{props.best===true && <h3>{props.title}</h3>}</p>
                       
                <p>{props.best===true && <h3>${props.price}</h3>}</p>
        </p>
    
        </div>
</div>
    )
}

export default BestProductItemCard
