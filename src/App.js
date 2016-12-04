import React, { Component } from 'react'
import './App.css'
import NavBar from './NavBar'
import BodyWeb from './BodyWeb'
import $ from '../public/assets/js/jquery.min'
var request

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      notes: '',
      formSubmit: false
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleNameChange (event) {
    this.setState({name: event.target.value})
  }
  handleEmailChange (event) {
    this.setState({email: event.target.value})
  }

  handleNotesChange (event) {
    this.setState({notes: event.target.value})
  }

  handleSubmit (event) {
    request = $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbzHy7JbWwf59iWU0Pjgpt7dggSuqiI3O9xrwH7qUvC_r5gLQHX7/exec',
      type: 'post',
      data: `Name=${this.state.name}&Email=${this.state.email}&Notes=${this.state.notes}`
    })

    // Callback handler that will be called on success
    request.done((response, textStatus, jqXHR) => {
      this.setState({formSubmit: true})
    })

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown) {
        // Log the error to the console
      console.error(
            'The following error occurred: ' +
            textStatus, errorThrown
        )
    })

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
      console.log('success')
    })

    // Prevent default posting of form
    event.preventDefault()
  }
  render () {
    if (this.state.formSubmit === true) {
      return (
        <div className='App'>
          <NavBar />
          <br />
          <BodyWeb />
          <section id='theweekend' className='blog wow fadeInUp' data-wow-delay='300ms'>
            <div className='container'>
              <div className='row'>
                <h1>How Can We Help?</h1>
                <form className='cd-form floating-labels' onSubmit={this.handleSubmit}>
                  <fieldset>

                    <div id='image-wrap' className='modal__img-wrap'>
                      <img id='thumb' className='modal__img' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/186499/thumb.svg' alt='' />
                    </div>
                    <div className='modal__text-wrap'>
                      <h1 className='modal__header dope-af'>Damn.
                    </h1>
                      <svg id='repeat' className='modal__repeat' xmlns='http://www.w3.org/2000/svg' width='17.7' height='20' viewBox='0 0 17.7 20'><path className='st0' d='M8.1 2.7V.3c0-.2-.2-.3-.4-.2L3.2 3.7c-.1.1-.1.3 0 .4l4.5 3.7c.2.1.4 0 .4-.2V5.2c3.1 0 5.6 2.5 5.6 5.6 0 3.1-2.5 5.6-5.6 5.6-3.1 0-5.6-2.5-5.6-5.6 0-.7-.6-1.2-1.2-1.2S0 10.1 0 10.8c0 4.5 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1z' /></svg>
                    </div>

                  </fieldset>
                </form>
              </div>
            </div>
          </section>
          <div className='App-header'>
            <footer className='gradient'>
              <div className='containerX'>
                <div className='ball' />
                <div className='ball' />
                <div className='ball' />
                <div className='ball' />
                <div className='ball' />
                <div className='ball' />
                <div className='ball' />
                <div><p className='text-center'>See you at the Drop Point</p></div>
              </div>
            </footer>
          </div>
        </div>
      )
    } else {
      return (
        <div className='App'>
          <NavBar />
          <br />
          <BodyWeb />
          <section id='contactus' className='blog wow fadeInUp' data-wow-delay='300ms'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1>Let's Talk</h1>
                  <p>Thanks for your interest in working with unscryptd. You can email <em><a style={{textDecoration: 'none' }} href='mailto:yo@unscryptd.com?Subject=Hello' target='_top'>yo@unscryptd.com</a></em>, or simply fill in the following form. We’ll be contacting you shortly.</p>
                  <form className='cd-form floating-labels' onSubmit={this.handleSubmit}>
                    <fieldset>

                      <div className='icon'>
                        <label className='cd-label'>Name</label>
                        <input className='user' type='text' name='cd-name' id='cd-name' value={this.state.value} onChange={this.handleNameChange} required />
                      </div>

                      <div className='icon'>
                        <label className='cd-label'>Email</label>
                        <input className='email' type='email' name='cd-email' id='cd-email' value={this.state.email} onChange={this.handleEmailChange} required />
                      </div>
                      <div className='icon'>
                        <label className='cd-label'>Tell Us about your ideal bachelor party</label>
                        <textarea className='message' name='cd-textarea' id='cd-textarea' value={this.state.notes} onChange={this.handleNotesChange} />
                      </div>

                      <div>
                        <input className='btn btn-danger btn-lg' type='submit' value='Submit' />
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <footer className='gradient'>
            <div className='containerX'>
              <div className='ball' />
              <div className='ball' />
              <div className='ball' />
              <div className='ball' />
              <div className='ball' />
              <div className='ball' />
              <div className='ball' />
              <div><p className='text-center'>See you at the Drop Point</p></div>
            </div>
          </footer>
        </div>
      )
    }
  }
}

export default App
