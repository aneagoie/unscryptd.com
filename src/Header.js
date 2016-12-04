import React, { Component } from 'react'
import './BodyWeb.css'

class Header extends Component {
  render () {
    return (
        <header id='home' style={{overflow: 'scroll'}}>
          <div className='container-fluid'>

            <div className='container'>
              <div style={{paddingTop: '20px'}} className='row'>
                <div className='col-md-12 col-xs-12'>
                  <div href='#' className='thumbnail logo center'>
                    <img style={{width: '25%'}} src='images/unscryptd-logo2.png' alt='' className='img-responsive center' />
                  </div>
                <br/><br/>
                </div>
                <div className="envelope center-envelope">
                  <div className="paper"></div>
                </div>
                <div style={{marginTop: '-20px'}} className="jumbotron">
                <h1>
                  <small className="center">Bachelor parties planned by experts</small>
                  <strong className="center">Kept Secret</strong>
                </h1>
                <a className='center' data-scroll href="#aboutunscryptd"><div className="mouse-icon"><div className="wheel"></div></div></a>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
  }
}

export default Header