import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  function na(){
    var navMenu=document.getElementById('nav-menu')
    if(navMenu.style.display==="none"){
      navMenu.style.display="block"
    }else{
      navMenu.style.display="none"
    }
  }
  return (
    <div>
        <nav className='navbar' id='navbar'>
          <span id='ecom'>E-com</span>
            <ul id='nav-list'>
                <li className='nav-item'><a href="/#">Home</a></li>
                <li className='nav-item'><a href="/#">Products</a></li>
                <li className='nav-item'><a href="/#">Store</a></li>
            </ul>
            <div id='div-icons'>
                <ul id='nav-icons'>
                    <li><a href="/#"><FontAwesomeIcon icon={faInstagram} size='xl' style={{color: "#ffffff",}} /></a></li>
                    <li><a href="/#"><FontAwesomeIcon icon={faFacebook} size='xl' style={{color: "#ffffff",}} /></a></li>
                    <li><a href="/#"><FontAwesomeIcon icon={faWhatsapp} size='xl' style={{color: "#ffffff",}} /></a></li>
                </ul>
                    <button onClick={na}  id='nav-btn'><FontAwesomeIcon icon={faBars} size='xl' style={{color: "#ffffff",}} /></button>
            </div>
             <div id='nav-menu'>
                <p><a href="/#">Home</a></p>
                <p><a href="/#">Products</a></p>
                <p><a href="/#">Store</a></p>
            </div>
        </nav>
       
    </div>
  )
}
