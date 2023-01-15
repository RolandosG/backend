
import {useEffect,useContext} from "react"
import {useParams} from "react-router-dom"

import Header from "../components/Header";
import Footer from "../components/Footer";
import SpecificCategoryProducts from "../components/SpecificCategoryProducts";
import ProductContext from "../context/ProductContext";


const ProductsPage = () => {
  
  const {setProducts} = useContext(ProductContext);
  const {category } = useParams();

  
        
  useEffect(()=>{


    //GET, POST,PUT, DELETE from our Front-End TO our Back

    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?category=${category}`)
    .then(response=>response.json())
    .then(json=>{

          
          setProducts(json.data)

    })
    .catch(err=>{
        console.log(`Error ${err}`)
    })
   
},[])





    return (
    <div className="grid grid-row-3" id="main-container">  
        <Header/>
        <main>
          <SpecificCategoryProducts />
        </main>
        <Footer/>
    </div>
    )
}

export default ProductsPage
