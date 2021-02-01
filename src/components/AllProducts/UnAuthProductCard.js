// imports
import React, { Fragment } from 'react'
// import Button from 'react-bootstrap/Button'
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

// Below: will be unAuth Product card
const unAuthProductCard = products.map(product => (
  <CardDeck key={product.id} style={{ width: '25rem' }} >
    <Card style={{ marginBottom: '15%' }} >
      <Card.Img variant="top" src={product.pictureUrl} style={{ width: '100%', margin: 'auto', padding: 'auto' }}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Title>${product.price}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <p>Log in to purchase</p>
      </Card.Footer>
    </Card>
  </CardDeck>
)
)

const UnAuthProducts = () => (
  <Fragment>
    <div style={cardContainerLayout}>
      { unAuthProductCard }
    </div>
  </Fragment>

)

export default UnAuthProducts
