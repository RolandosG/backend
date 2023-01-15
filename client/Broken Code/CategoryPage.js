import {useEffect,useContext} from "react"
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CategoryPageList from "../components/CategoryPageList";
import ProductContext from "../src/context/ProductContext";


const ProductsPage = () => {

  
  const {setProducts} = useContext(ProductContext);

  useEffect(()=>{


    //GET, POST,PUT, DELETE from our Front-End TO our Back

    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products`)
    .then(response=>response.json())
    .then(json=>{

          //We updated the data returned from the Backed with the resort state
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
          <CategoryPageList/>
        </main>
        <Footer/>
    </div>
    )
}

export default ProductsPage
