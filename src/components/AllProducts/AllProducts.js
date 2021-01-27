// imports
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const products = [
  { id: 1, name: 'iPhone12', category: 'Apple Iphones', price: '$699', pictureUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604343704000' },
  { id: 2, name: 'Macbook', category: 'Apple Macbooks', price: '$1099', pictureUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000' },
  { id: 3, name: 'HP Monitor', category: 'Monitor', price: '$799', pictureUrl: 'https://i.ebayimg.com/images/g/TGYAAOSwIV5eK3dS/s-l640.jpg' }

]

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexFlow: 'row wrap'
}

const AllProducts = () => {
  const product = products.map(product => {
    return (
      <CardDeck style={{ width: '25%' }} key={products.id}>
        <Card style={{ display: 'flex', justifyContent: 'center' }}>
          <Card.Img style={{ width: '75%', height: '75%', margin: 'auto' }} variant="top" src={product.pictureUrl} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.category}
            </Card.Text>
            <Card.Title>{product.price}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Buy Now</Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    )
  })
  return (
    <div style={cardContainerLayout}>
      {product}
    </div>
  )
}

export default AllProducts
