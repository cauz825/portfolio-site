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
      alt="First slide" 
      height='600' />

      <Carousel.Caption>
        <h3>Michael's Portfolio Site</h3>
      </Carousel.Caption>
    </center>
  </Carousel.Item>
      
  <Carousel.Item>
    <center>
      <img
        className="d-block w-98"
        src={Headshot}
        alt="Second slide" 
        href='/about' 
        height='600' />
    </center> 

    <Carousel.Caption>
      <h3>A Little About Me</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <center>
      <img
        className="d-block w-98"
        src=""
        alt="Second slide" 
        height='600' />
    </center> 

    <Carousel.Caption>
      <h3>Contact Me</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default HomeCarousel;