
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom"
const SpecificProduct = () => {


    const {id } = useParams();

    const [product, setProduct] = useState({
        product_name:"",
        product_photo:"",
        description:"",
        product_price :0

    });


    useEffect(()=>{

        //communicate with the backend!
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/${id}`)
        .then(response=>response.json())
        .then(json=>{
    

              setProduct(json.data);
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    
    
    },[])


    return (
      <div className="grid grid-row-3" id="main-container">  
      <Header/>
      <main>
          <section id="product-description-section">
                  <div className="container grid grid-col-4 grid-gap-2">
      
                      <img src={product.product_photo} alt="product"/>
                  
                      <div className="product-description-content-area">
                          <h2>{product.product_name}</h2>
                          <h3>Details</h3>
                          <p>Description: {product.description}</p>
                          <p>Cost: ${product.product_price}</p>
                          <p>Category: {product.category}</p>
                      </div>
                  </div>
      
              </section>
      </main>
      <Footer/>
  </div>
    )
}

export default SpecificProduct
