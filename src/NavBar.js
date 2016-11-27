import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {

  render () {
    return (
      <nav className="gradient navbar navbar-fixed-top " role="navigation">
  <div className="container">
  <img style={{width: '5%'}} src='images/horns.png' alt='' className=' navbar-header img-responsive' />
        <div className="navbar-header" style={{float: 'right'}}>
        <a data-scroll href="#contactus"><div className=" btn btn-danger btn-lg">Inquiry</div></a>
      </div>

  </div>
</nav>
    )
  }
}

export default NavBar
