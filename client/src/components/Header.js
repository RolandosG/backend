import React,{useState} from'react';
import {Link} from "react-router-dom";
import logo from '../assets/img/logo.png';
import Button from '@mui/material/Button';
import ModalDialog from './registration/ModalDialog';
const Header = () => {

    const [open, setOpen] = useState(false);



    return (
        <header>
            <div className="container">
                    <nav>
                        <ul>
                            <li>
                               
                                <Link to="/"> <img src={logo} alt="logo"
                                    width="30"
                                    height="20"
                                    className="d-inline-block align-top"
                                    style={{width: '50px'}}
                                />{' '}</Link>
                            </li>
                            <li>
                                <Link to="/"><div className="App"><Button variant="contained" color="primary" >STORE PAGE</Button></div></Link>
                            </li>
                            <li>
                                <Link to="/products"><div className="App"><Button variant="contained" color="primary" >Our Products</Button></div></Link>
                            </li>
                             <li>
                             <Link to="/about"><div className="App"><Button variant="contained" color="primary" >About us</Button></div></Link>
                            </li>
                            <li>
                                 <Link to="/registration"><div className="App"><Button variant="contained" color="primary" >Signup</Button></div></Link>
                            </li>
                            <input type="text" />
                            <li>
                            <Link to="/search"><div className="App"><Button variant="contained" color="primary" >SEARCH</Button></div></Link>
                            </li>
                            
                        </ul>
                    </nav>
                    
            </div>
        </header>
    )
}

export default Header
