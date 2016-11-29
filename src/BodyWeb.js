import React, { Component } from 'react'
import './BodyWeb.css'
import smoothScroll from 'smooth-scroll'

smoothScroll.init()
class BodyWeb extends Component {
  render () {
    return (
      <div>
        <div className='site-overlay' />

        <header id='home'>
          <div className='container-fluid'>

            <div className='container'>
              <div style={{paddingTop: '20px'}} className='row'>
                <div className='col-md-12 col-xs-12'>
                  <a href='#' className='thumbnail logo center'>
                    <img style={{width: '25%'}} src='images/unscryptd-logo2.png' alt='' className='img-responsive center' />
                  </a>
                  <br/><br/>
                </div>
                <div className="envelope center">
                  <div className="paper"></div>
                </div>
              </div>
              <div className='jumbotron'>

                <h1>
                  <div><small>Bachelor parties planned by experts</small></div>
                  <strong>Kept Secret</strong>
                </h1>
                <a className='center' data-scroll href="#theweekend"><div className="mouse-icon"><div className="wheel"></div></div></a>
              </div>
            </div>
          </div>
        </header>
        <section id='theweekend' className='blog wow fadeInUp' data-wow-delay='300ms'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                <h1>What is Unscryptd?</h1>
                <p>Exactly what the tagline suggests. At Unscryptd, we plan epic bachelor parties for a groom and groomsmen who want a unique experience, instead of sticking to the script. </p>
                <p>We’re not talking about run-of-the-mill bachelor parties. We’re talking about the type of unique experience that you’ll remember for the rest of your life.</p>
                <p><strong>The only catch? You won’t know any of the details until the day the party starts, aka Day of Reckoning.</strong></p>
                <p>Many of our trips start with you and your group on planes, trains, and automobiles, as we’ve found that our clients love to explore the world.</p>
                <p>Unscryptd will handle all the travel plans, logistics, hotels, food, and mischief.</p>
                <p>Planning an amazing bachelor party takes a lot of time and hassle that you don’t need in your life. Unscryptd takes care of all of this, so you can focus on giving the groom a Viking’s Death.</p>
                <a style={{display: 'none'}} className='btn btn-danger btn-lg' href='#'>See the Video <i className='fa fa-arrow-circle-o-right' /> </a>
              </div>
              <div className='col-md-5'>

                  <img style={{paddingTop: '120px'}} src='images/main-background2.jpeg' alt='' className='img-responsive' />

              </div>
            </div>
          </div>
        </section>
        <section id='about' className='number wow fadeInUp' data-wow-delay='300ms'>
          <div className='container-fluid'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 opaline col-md-offset-6'>
                  <div className='row'>
                    <div className='col-md-offset-1 col-md-10'>
                      <h1>What can I expect on a trip like this?</h1>
                      <p>The conversation that we have with the Groom and Best Man adds a lot of value and context to our plan. We find out what the group does and does not like and ultimately, what would make an experience like this unforgettable for the group.</p>
                      <p>Some of the things we could do include:</p>
                      <ol>
                        <li>Island adventures</li>
                        <li>Hot air balloon dining</li>
                        <li>Watch the Victoria secret fashion show in person</li>
                        <li>Kentucky Derby</li>
                        <li>Play drunk soccer</li>
                      </ol>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='feat'>
          <div className='container'>
            <div className='row features'>
              <div className='col-md-12 text-center wow fadeInUp' data-wow-delay='100ms'>
                <span className='typcn typcn-feather x3' />
                <div className='container-block'>
                <h1>Sounds fantastic, what do I need to start?</h1>
                <p>1. Give us the dates that work for you</p>
                <p>2. Confirm the group size</p>
                <p>3. The Groom and Best Man meet with our Consultants to discuss your needs. This conversation is best over whiskey. </p>
                <h1>Then what? </h1>
                <p>From there, we go silent. You don't hear from us unless there's something we need input on, and even then, when you hear from us, it will be vague.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='history' className='story wow fadeInUp' data-wow-delay='300ms'>
          <div className='container-fluid'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 opaline'>
                  <div className='row'>
                    <div className='col-md-10 col-md-offset-1'>
                      <h1>Why can’t I do this myself? </h1>
                      <p>Have you ever tried to organize an 8-person, 3-day road trip that included drunk soccer, dinner on a hot air balloon, and racecar driving? I didn’t think so.</p>
                      <p>People call us because we’re the experts, and we can save you time, stress, and help you avoid things going wrong at the very last minute. </p>
                      <p>Even if you had the time, do you have the connections to organize a <strong>private drunken-boat tour through the canals of St. Petersburg Russia?</strong> Probably not.</p>
                      <p>Our job is to make your life easier and provide you with an experience that is made for the big screen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='itinerary'>
          <div className='container'>
          <div className='row features'>
              <div className='col-md-12 wow fadeInUp container-block' data-wow-delay='100ms'>
                <h1>Day of Reckoning</h1>
                <p>The day of the bachelor party, your entire group will receive a call, telling them where and when to meet your consultant, aka the Drop Point. </p>
                <p>Once all party members arrive at the Drop Point, your consultant will appear, and present you with an envelope that has your entire itinerary. </p>
                <p>Then we let you do what bachelor parties do best. </p>
                <h1>Sounds awesome, how much does it cost?</h1>
                <p>We customize our pricing based on two things:</p>
                <div className='col-md-12'>
                <p>1. The number of group members (the bigger the group, the lower the per-person cost)</p>
                <p>2. The number of days of the bachelor party. The number of days depends on the level of insanity that you want. The more days, the higher the pricing.</p>
                </div>
                <br/>
                <p>One thing to keep in mind, we are not a good fit for, “ballers on a budget.” Instead, we go above and beyond to provide the experience that you’ll never forget and we charge accordingly.</p>
              </div>
            </div>
            <div className='row features'>
              <div className='col-md-12 wow fadeInUp container-block' data-wow-delay='100ms'>
                <h2>Example Pricing</h2>
                <div className='col-md-4'>
                  <h3>2 days</h3>
                  <ul>
                    <li>6 members</li>
                    <li>$2000 per-person</li>
                  </ul>
                </div>
                <div className='col-md-4'>
                  <h3>3 days</h3>
                  <ul>
                    <li>6 members</li>
                    <li>$2500 per-person</li>
                  </ul>
                </div>
                <div className='col-md-4'>
                  <h3>4 days</h3>
                  <ul>
                    <li>6 members</li>
                    <li>$2750 per-person</li>
                  </ul>
                </div>
                <p><em>Contact us for a more accurate Quote.</em></p>
              </div>
            </div>
          </div>
        </section>
        <section id='about' className='number wow fadeInUp' data-wow-delay='300ms'>
          <div className='container-fluid'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 opaline col-md-offset-6'>
                  <div className='row'>
                    <div className='col-md-offset-1 col-md-10'>
                      <h1>Why the f do you charge so much?</h1>
                      <p>It doesn't sound like you see the value in what we are providing, and that's completely OK to us, we’re not for everyone.</p>
                      <p>This service is for a groom and groomsmen who want to have an adventure that they’ll never forget, and see the value of investing in these experiences. </p>
                      <h1>I like X, Y, and Z, can you accommodate these things? </h1>
                      <p>The short answer is, “we can probably do that." Typically, when we get requests, they are for things that you'd expect at a bachelor party (use your imagination). Then we add our ideas to spice things up further. </p>
                      <p><strong>However, we ENCOURAGE YOU TO GO NUTS!</strong></p>
                      <p>This bachelor party is going to be your epic adventure, and we just want to facilitate this for you. The easiest way for us to determine if we can or can't accommodate something is to contact us.</p>
                      <p>Usually, we ask about these types of things when the Groom and Best Man have a drink with our consultants. If you can't wait until then, drop us an email at <email>yo@unscryptd.com</email>, and we can tell you if what you're asking for is feasible.</p>
                      <p>You’d be surprised what we can do with a little bit of advanced notice. </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='photos' className='gallery wow fadeInUp' data-wow-delay='300ms'>
          <div className='container'>
            <div className='row'>
              <div className='masonry image-gallery'>
                <div className='grid-sizer' />
                <div className='gutter-sizer' />
                <div className='item item-width2'>
                  <a href='#'>
                    <img src='images/4.jpeg' alt='' />
                  </a>
                </div>
                <div className='item'>
                  <a href='#'>
                    <img src='images/2.jpeg' alt='' />
                  </a>
                </div>
                <div className='item'>
                  <a href='#'>
                    <img src='images/smore.jpeg' alt='' />
                  </a>
                </div>
                <div className='item'>
                  <a href='#'>
                    <img src='images/1.jpeg' alt='' />
                  </a>
                </div>
                <div className='item'>
                  <a href='#'>
                    <img src='images/3.jpeg' alt='' />
                  </a>
                </div>
                <div className='item item-width2'>
                  <a href='https://unsplash.it/1000/600?image=451'>
                    <img src='' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }
}

export default BodyWeb
