import React from 'react'
import { Carousel } from 'react-bootstrap'
import Headshot from '../Images/headshot.jpg'

function HomeCarousel() {
    return(
      <Carousel>
  <Carousel.Item>
    <center>
      <img
      className="d-block w-100"
      src={Headshot}
      alt="First slide"
      height='800'
      />
      <Carousel.Caption>
        <h3>Welcome to my portfolio site!</h3>
        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </center>
  </Carousel.Item>
      
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default HomeCarousel;