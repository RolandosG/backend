import {useEffect,useContext} from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestProductsList from "../components/Best_Products/BestProductsList";
import ProductList from "../components/ProductList";
import ProductCategoryList from "../components/ProductCategoryList";
import ProductContext from "../context/ProductContext"; 
import { Divider } from 'rsuite';
import Hero from "../components/Hero";
const HomePage = () => 
{
    const {setProducts} = useContext(ProductContext);
     
useEffect(()=>{


  //GET, POST,PUT, DELETE from our Front-End TO our Back

  fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products`)
  .then(response=>response.json())
  .then(json=>{

        
        setProducts(json.data)

  })
  .catch(err=>{
      console.log(`Error ${err}`)
  })

// eslint-disable-next-line
},[])
    return (
        <div className="main-container">
    <div className="grid" id="main-container">  
            <Header/>
            <main>
                <BestProductsList/> 
                <Hero/>
                <ProductList/>
              <Divider />
            </main>
            <Footer/>
        </div>
        </div>
    )
}
export default HomePage
