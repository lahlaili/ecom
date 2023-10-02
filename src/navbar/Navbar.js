import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
    <div id='div'>
        <nav id='navbar'>
            <ul id='nav-list'>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Products</a></li>
                <li><a href="/#">Store</a></li>
            </ul>
            <ul id='nav-icons'>
                <li><a href="/#"><FontAwesomeIcon icon={faInstagram} size='xl' style={{color: "#ffffff",}} /></a></li>
                <li><a href="/#"><FontAwesomeIcon icon={faFacebook} size='xl' style={{color: "#ffffff",}} /></a></li>
                <li><a href="/#"><FontAwesomeIcon icon={faWhatsapp} size='xl' style={{color: "#ffffff",}} /></a></li>
            </ul>
        </nav>
    </div>
  )
}
