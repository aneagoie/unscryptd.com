import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {

  render () {
    return (
      <nav className='gradient navbar navbar-fixed-top ' role='navigation'>
        <div className='container'>
          <a data-scroll href='#home'><img style={{width: '40px', marginLeft: '5px'}} src='images/horns.png' alt='' className=' navbar-header' /></a>
          <div className='navbar-header' style={{float: 'right'}}>
            <a data-scroll href='#contactus'><div style={{marginRight: '5px'}}className='btn btn-danger'>Inquiry</div></a>
            <div style={{clear: 'both'}} />
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
