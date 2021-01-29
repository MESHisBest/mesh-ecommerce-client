// imports
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Link } from 'react-router-dom'
import products from '../../data/products-list'
// import { purchaseCreate } from './../../api/purchases'

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap',
  flexBasis: 'auto',
  margin: '10px',
  padding: '10px'
}

// Below: this will be auth (or signed-in) product card
const authProductCard = products.map(product => (
  <CardDeck key={product.id} style={{ width: '25rem' }} >
    <Card style={{ marginBottom: '15%' }}>
      <Card.Img variant="top" src={product.pictureUrl} style={{ width: '100%', margin: 'auto', padding: 'auto' }}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Title>{product.price}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Buy Now</Button>
        <Link to={{
          pathname: '/create-purchase',
          state: { product: product }
        }} className='btn btn-primary'>TEST</Link>
      </Card.Footer>
    </Card>
  </CardDeck>
)
)

const AuthProducts = () => (
  <div style={cardContainerLayout}>
    { authProductCard }
  </div>
)

export default AuthProducts
