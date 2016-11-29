import React, { Component } from 'react'
import './BodyWeb.css'
import Header from './Header.js'

class BodyWeb extends Component {
  render () {
    return (
      <div>
        <Header id='home' style={{overflow: 'auto'}}>
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
        </Header>
        <section id='aboutunscryptd' className='blog wow fadeInUp' data-wow-delay='300ms'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                <h1>What is Unscryptd?</h1>
                <p>We plan epic bachelor parties, where no one knows the itinerary until the day of the bachelor party.</p>
                <p>We meet with the groom and best man over whiskey. Then you don’t hear from us until the morning of the party, aka the Day of Reckoning.</p>
                <p><strong>You get a call in the morning telling you where to meet us to get your itinerary, aka the Drop Point. At the Drop Point, we give you an itinerary in an envelope.</strong></p>
                <p>Then we leave you to do what Bachelor parties do best.</p>
                <p>We handle all the logistics, (Travel, food, accommodations), so that you can focus on unforgettable experience.</p>
                <p>Whatever the means to you and your group. </p>
                <a style={{display: 'none'}} className='btn btn-danger btn-lg' href='#'>See the Video <i className='fa fa-arrow-circle-o-right' /> </a>
              </div>
              <div className='col-md-5'>

                  <img style={{paddingTop: '120px'}} src='images/main-background2.jpeg' alt='' className='img-responsive' />

              </div>
            </div>
          </div>
        </section>
        <section id='about' className='intros wow fadeInUp' data-wow-delay='300ms'>
          <div className='container-fluid'>
            <div className='container'>
              <div className='row'>
              <div className='col-md-6 opaline col-md-offset-6'>
                  <div className='row'>
                    <div className='col-md-offset-1 col-md-10'>
                      <h1>How an Unscryptd experience works:</h1>
                      <ol style={{color: 'white'}}>
                        <li>Someone from your group gets in touch with our consultants</li>
                        <li>HThe Groom and Best Man meet with our consultants to talk about their needs</li>
                        <li>The Unscryptd consultants go dark, coming up with a plan in the background</li>
                        <li>The morning of the bachelor party, aka The Day of Reckoning, the members of the bachelor party all get a phone call, telling them where to meet our consultants, aka, The Drop Point</li>
                        <li>Once everyone has arrived, the consultant appears and provides you with an envelope</li>
                        <li>Once the experience has started, we leave you to do what bachelor parties do best</li>
                      </ol>
                      <p>The experience we're talking about is not run-of-the-mill bachelor parties. We’re talking about the type of unique experience that you’ll remember for the rest of your life.</p>
                      <p>Many of our trips start with you and your group on planes, trains, and automobiles, as we’ve found that our clients love to explore the world. Unscryptd will handle all the travel plans, logistics, hotels, food, and mischief.</p>
                      <p>Planning an amazing bachelor party takes a lot of time and hassle that you don’t need in your life. Unscryptd takes care of all of this, so you can focus on giving the groom a Viking’s Death.</p>
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
                <h1>What can I expect from an Unscryptd Bachelor Party?</h1>
                <p>Each experience that we plan starts with a conversation with the Groom and Best Man, to determine what would make this experience memorable. From there we would add our flavor, to spice things up and add some surprise.</p>
                <p>Some of the experiences could include:</p>
                <ol>
                        <li>Island adventures</li>
                        <li>Hot air balloon dining</li>
                        <li>Watch the Victoria's Secret fashion show live</li>
                        <li>Kentucky Derby</li>
                        <li>Playing drunk soccer</li>
                        <li>Once the experience has started, we leave you to do what bachelor parties do best</li>
                      </ol>
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
                      <h1>Why won't you tell anyone your plan?</h1>
                      <p>There are plenty of services that will plan a trip for you, but we've never heard of one that won't tell you the plan until you've started the journey.  Besides, what happened to your sense of adventure?</p>
                      <h1>Can you please just tell me the itinerary? I need to know for a reason such as X, Y, Z.</h1>
                      <p>No. If this is something that is a deal breaker for you, not a problem. There are plenty of other excellent services; we're just not the one for you.</p>
                      <h1>Why can’t I do this myself?</h1>
                      <p>Have you ever tried to organize an 8-person, 3-day road trip that included drunken soccer, dinner on a hot air balloon, and racecar driving? I didn’t think so.</p>
                      <p>People call us because we’re the experts, and we can save you time, stress, and help you avoid things going wrong at the very last minute.</p>
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
                <h1>How much does this cost?</h1>
                <p>We customize our pricing based on two things:</p>
                <div className='col-md-12'>
                <p>The more people you bring, the lower the cost per attendee. The more days and more epicness will lead to a higher cost per person.</p>
                <p>One thing to keep in mind, we are not a good fit for, “ballers on a budget.” Instead, we go above and beyond to provide the experience that you’ll never forget and we charge accordingly.</p>
                </div>
              </div>
            </div>
            <div className='row features'>
              <div className='col-md-12 wow fadeInUp container-block' data-wow-delay='100ms'>
                <h2>Example Pricing</h2>
                <div className='col-md-4'>
                  <h3>2 Days</h3>
                  <ul>
                    <li>6 members</li>
                    <li>$2000 per-person</li>
                  </ul>
                </div>
                <div className='col-md-4'>
                  <h3>3 Days</h3>
                  <ul>
                    <li>6 members</li>
                    <li>$2500 per-person</li>
                  </ul>
                </div>
                <div className='col-md-4'>
                  <h3>4 Days</h3>
                  <ul>
                    <li>6 members</li>
                    <li>$2750 per-person</li>
                  </ul>
                </div>
                <p><a style={{textDecoration: 'none', color: '#000'}} data-scroll href="#contactus"><em>Contact us for a more accurate Quote.</em></a></p>
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
                      <p>The short answer is, “we can probably do that." Typically, when we get requests, they are for things that you'd expect at a bachelor party (use your imagination). Then we add our ideas to spice things up further.</p>
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
                    <img src='images/12.jpg' alt='' />
                </div>
                <div className='item'>
                    <img src='images/6.jpg' alt='' />
                </div>
                <div className='item'>
                    <img src='/images/7.jpeg' alt='' />
                </div>
                <div className='item'>
                    <img src='images/3.jpeg' alt='' />
                </div>
                <div className='item'>
                    <img src='images/5.jpg' alt='' />
                </div>
                <div className='item'>
                    <img src='images/8.jpg' alt='' />
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
