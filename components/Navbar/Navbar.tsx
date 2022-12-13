import { Menu } from '@mui/icons-material'
import Link from 'next/link'
import React, { Component } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default class Navbar extends Component {
  render() {
    return (
     <nav>
      <style jsx>
        {`
        nav{
          display: flex;  
          justify-content: space-around;
        }
        a{
          margin: 0 .6em;
        }
        `}
      </style>
        <div className="logo">
          Logo
        </div>
        <div className="nav_link">
                <Link className='link' href={"/"}>home</Link>
        </div>
        <div className="cart">
            <ShoppingCartIcon/>
        </div>
        <div className="hamburger">
            <Menu/>
        </div>
     </nav>
    )
  }
}
