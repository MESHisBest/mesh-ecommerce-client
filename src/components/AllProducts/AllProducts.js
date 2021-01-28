// imports
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import products from '../../data/products-list'

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap',
  flexBasis: 'auto',
  margin: '10px',
  padding: '10px'
}

// Below: this will be auth (or signed-in) product card
const authProductCard = products.map(product => {
  return (
    <CardDeck key={products.id} style={{ width: '25rem' }} >
      <Card>
        <Card.Img variant="top" src={product.pictureUrl} style={{ width: '100%', margin: 'auto', padding: 'auto' }}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Title>{product.price}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Buy Now</Button>
        </Card.Footer>
      </Card>
    </CardDeck>
  )
})

// Below: will be unAuth Product card
const unAuthProductCard = products.map(product => {
  return (
    <CardDeck key={products.id} style={{ width: '25rem' }} >
      <Card style={{ marginBottom: '15%' }} >
        <Card.Img variant="top" src={product.pictureUrl} style={{ width: '100%', margin: 'auto', padding: 'auto' }}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Title>{product.price}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <p>log in to purchase</p>
        </Card.Footer>
      </Card>
    </CardDeck>
  )
})
// const AllProducts = ({ user }) => (
//    {user? authProductCard : unAuthProductCard}
// )
const AllProducts = ({ user }) => {
  if (user) {
    return (
      <div style={cardContainerLayout}>
        { authProductCard }
      </div>)
  }
  if (!user) {
    return (
      <div style={cardContainerLayout}>
        { unAuthProductCard }
      </div>)
  }
}

export default AllProducts
