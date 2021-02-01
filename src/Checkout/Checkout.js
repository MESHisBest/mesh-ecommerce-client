import React from 'react'
// import ReactDOM from 'react-dom'
import StripeCheckout from 'react-stripe-checkout'
// import axios from 'axios'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function CheckoutForm (product) {
  const handleToken = token => {
    const body = {
      token,
      product
    }
    const headers = {
      'Content-Type': 'application/json'
    }
    return fetch('http://localhost:8080/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log('response ', response)
        const { status } = response
        console.log('Status ', status)
        toast('Success! Check email for details', { type: 'success' })
      })
      .catch(error => {
        console.log(error)
      })
  }

  // async function handleToken (token) {
  //   console.log(token)
  //   const response = await axios.post(
  //     'https://ry7v05l6on.sse.codesandbox.io/checkout',
  //     { token, product }
  //   )
  //   console.log(response)
  //   const { status } = response.data
  //   console.log('Response:', response.data)
  //   if (status === 'success') {
  //     toast('Success! Check email for details', { type: 'success' })
  //   } else {
  //     toast('Something went wrong', { type: 'error' })
  //   }
  // }

  return (
    <div className="checkout-container">
      <StripeCheckout
        stripeKey="pk_test_51IF7lSC1DE44tNVIpsZ91JGlVyJ9htoV0OvzfS08SBeOpWmQTf4j22tPOXbJdCCG28dZCmXIrFF13PySFKEVYGfe00KrsTvyZs"
        token={handleToken}
        amount={product.product.price * 100}>
      </StripeCheckout>
    </div>
  )
}

export default withRouter(CheckoutForm)
