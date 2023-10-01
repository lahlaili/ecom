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
                <li>Home</li>
                <li>Products</li>
                <li>Store</li>
            </ul>
            <ul id='nav-icons'>
                <li><FontAwesomeIcon icon={faInstagram} size='xl' style={{color: "#000000",}} /></li>
                <li><FontAwesomeIcon icon={faFacebook} size='xl' style={{color: "#000000",}} /></li>
                <li><FontAwesomeIcon icon={faWhatsapp} size='xl' style={{color: "#000000",}} /></li>
            </ul>
        </nav>
    </div>
  )
}
