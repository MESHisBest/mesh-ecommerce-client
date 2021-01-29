import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Checkout from './../Checkout/Checkout'
// import Checkout from './componets/Checkout/Checkout'
import { withRouter } from 'react-router-dom'

const PUBLIC_KEY = 'pk_test_51IEGu1Ghx9lBEd2LFESgL6KMB8xKyKyXxLakZS8quq7Jw4tCG6z9YWnf4QTgpYrD0tuA0NggB4YtkMVlfHi2Iw6N001yeVRaGb'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Stripe = (props) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Checkout />
      {console.log(props.location.state)}
    </Elements>
  )
}

export default withRouter(Stripe)
