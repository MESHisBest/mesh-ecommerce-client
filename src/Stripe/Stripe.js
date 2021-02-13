import React, { Fragment } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PurchaseCreate from './../components/PurchaseCreate/PurchaseCreate'
// import Checkout from './componets/Checkout/Checkout'
import { withRouter } from 'react-router-dom'

const PUBLIC_KEY = 'pk_test_51IEGu1Ghx9lBEd2LFESgL6KMB8xKyKyXxLakZS8quq7Jw4tCG6z9YWnf4QTgpYrD0tuA0NggB4YtkMVlfHi2Iw6N001yeVRaGb'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Stripe = (props) => {
  const { product } = props.location.state
  const { user } = props
  return (
    <Elements className='checkout-form' stripe={stripeTestPromise}>
      <Fragment>
        <h4>{ product.name }</h4>
        <h4>${ product.price }</h4>
        <img className='checkout-img' src={ product.pictureUrl } />
        <PurchaseCreate product={product} user={user}/>
      </Fragment>
    </Elements>
  )
}

export default withRouter(Stripe)
