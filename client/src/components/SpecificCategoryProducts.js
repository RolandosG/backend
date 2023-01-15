import {useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import SpecificCategoryCard from './SpecificCategoryCard';
const SpecificCategoryList = () => {
    const {category } = useParams();
    const [CategoryProducts , setCategoryProducts] = useState([{}]);
       
        
        useEffect(()=>{
      
      
          //GET, POST,PUT, DELETE from our Front-End TO our Back
      
          fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?category=${category}`)
          .then(response=>response.json())
          .then(json=>{
      
                
                setCategoryProducts(json.data)
      
          })
          .catch(err=>{
              console.log(`Error ${err}`)
          })
          
},[])

    return (
        
        <section id="section-product-list">

            <div className= "container">

            <h1>Specific Products</h1>
            
                <div className="grid-best grid-best-gap-1 grid-best-row-gap-2 grid-best-col-4">
                
                    {CategoryProducts.map((product,index)=>( <SpecificCategoryCard  key={index} id={product._id} title={product.product_name} image={product.product_photo} price={product.product_price} best={product.best_seller ? true : false} desc={product.description} category={product.category}/>))}
                    
                </div>
              
            </div>
            
        </section>
        
    )
}

export default SpecificCategoryList
