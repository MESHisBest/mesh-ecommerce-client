import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import products from '../../data/products-list'

const cardContainerLayout = {
  width: '18rem',
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'row wrap'
}

const CarouselProducts = () => {
  return (
    <Carousel style={cardContainerLayout}>
      <Carousel.Item>
        <img
          src={products[0].pictureUrl}
          className="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>iPhone 12</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={products[1].pictureUrl}
          className="d-block w-100"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Macbook Pro</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={products[2].pictureUrl}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>HP Monitor</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}
export default CarouselProducts
