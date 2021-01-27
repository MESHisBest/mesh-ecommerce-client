import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import AllProducts from './AllProducts'

const CarouselProducts = () => {
  const product = AllProducts.map(product => {
    return (
      <Carousel key={product.id}>
        <Carousel.Item>
          <img
            src={product.pictureUrl}
            className="d-block w-100"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={product.pictureUrl}
            className="d-block w-100"
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
            src={product.pictureUrl}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  })
  return (
    <div>
      {product}
    </div>
  )
}
export default CarouselProducts
