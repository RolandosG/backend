import React,{useState} from'react';
import {BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from '../pages/ProductsPage';
import CategoryPage from '../pages/CategoryPage';
import ProductDescPage from '../pages/ProductDescPage';
import SpecificCategoryPage from '../pages/SpecificCategoryPage';
import RegistrationPage from '../pages/RegistrationPage';
import ProductContext from '../context/ProductContext';

import ModalDialog from './registration/ModalDialog.js'
import "../assets/css/App.css";
import "../assets/css/utilities.css";


const App = () => {
  const [products , setProducts] = useState([{}]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };
  return (

            
          <Router>
            <ProductContext.Provider value ={{products,setProducts}}>
            <Switch>
                    <Route exact path="/">
                        <HomePage />
            
                    </Route>
                    <Route exact path="/products">
                        <ProductsPage />
            
                    </Route>
                    <Route exact path="/about">
                        <AboutPage />
            
                    </Route>
                    <Route exact path="/Category">
                        <CategoryPage />
            
                    </Route>
                    <Route exact path="/products/details/:id">
                        <ProductDescPage />
            
                    </Route>
                    <Route exact path="/products?category=category">
                        <SpecificCategoryPage />
            
                    </Route>
                    <Route exact path="/registration">
                        <RegistrationPage />
            
                    </Route>
                    <ModalDialog open={open} handleClose={handleClose} />
                </Switch> 


            </ProductContext.Provider>
          </Router>
            
   
  )
}

export default App