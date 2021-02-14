import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import products from '../../data/products-list'

const cardContainerLayout = {
  width: '80%',
  height: '100%',
  padding: '15px',
  margin: '10px'
}
const dblock = {
  width: '100%',
  height: '550px',
  alignSelf: 'center'
}

const CarouselProducts = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
      <Carousel style={cardContainerLayout}>
        <Carousel.Item>
          <img
            src={products[1].pictureUrl}
            style={dblock}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{products[1].name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={products[5].pictureUrl}
            style={dblock}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>{products[5].name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={dblock}
            src={products[4].pictureUrl}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>{products[4].name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselProducts
