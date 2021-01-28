import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import products from '../../data/products-list'

const cardContainerLayout = {
  width: '80%',
  height: '18%',
  // borderColor: 'blue',
  padding: '15px',
  margin: '10px'
}
const dblock = {
  width: '100%',
  height: '550px'
}

const CarouselProducts = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Carousel style={cardContainerLayout}>
        <Carousel.Item>
          <img
            src={products[0].pictureUrl}
            // className="d-block w-100"
            style={dblock}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>iPhone 12</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={products[1].pictureUrl}
            // className="d-block w-100"
            style={dblock}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Macbook Pro</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            style={dblock}
            src={products[2].pictureUrl}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>HP Monitor</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
// <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span className="sr-only">Previous</span>
// </a>
//
// <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//   <span className="carousel-control-next-icon" aria-hidden="true"></span>
//   <span className="sr-only">Next</span>
// </a>
export default CarouselProducts
