import React from 'react'
import { Carousel } from 'react-bootstrap'
import Headshot from '../Images/headshot.jpg'
import Laptop from '../Images/coding-laptop.jpg'

function HomeCarousel() {
    return(
      <Carousel>
  <Carousel.Item>
    <center>
      <img
      className="d-block w-98"
      src={Laptop}
      alt="First slide" />

      <Carousel.Caption>
        <h3>Welcome to my portfolio site</h3>
        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </center>
  </Carousel.Item>
      
  <Carousel.Item>
    <center>
      <img
        className="d-block w-98"
        src={Headshot}
        alt="Second slide" 
        href='/about' />
    </center> 

    <Carousel.Caption>
      <h3>A Little About Me</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default HomeCarousel;