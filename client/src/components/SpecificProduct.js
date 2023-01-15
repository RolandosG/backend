
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import SpecificProductItemCard from './SpecificProductItemCard';
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
                    <div className="container">
        
                    <h1>Best Products</h1>
                    
                    <div className="grid-best grid-best-gap-1 grid-best-row-gap-2 grid-best-col-4">
                
                {product.map((product,index)=>( <SpecificProductItemCard  key={index} id={product._id} title={product.product_name} image={product.product_photo} price={product.product_price} best={product.best_seller ? true : false} desc={product.description} category={product.category}/>))}
                
            </div>
                    </div>
        
                </section>
        </main>
        <Footer/>
    </div>
    )
}

export default SpecificProduct
