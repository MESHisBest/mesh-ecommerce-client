import React from 'react'
// import ReactDOM from 'react-dom'
import StripeCheckout from 'react-stripe-checkout'
// import axios from 'axios'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'
import apiUrl from '../apiConfig'

import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function CheckoutForm (product) {
  const handleToken = token => {
    const body = {
      token,
      product
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    const newResourceData = {
      product: null,
      productId: null,
      price: null,
      pictureUrl: null
    }

    return fetch(`${apiUrl}/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log('response ', response)
        newResourceData.product = response.product
        newResourceData.productId = response.id
        newResourceData.price = response.price
        newResourceData.pictureUrl = response.pictureUrl
        const { status } = response
        console.log('Status ', status)
        toast('Success! View your purchase in My Orders', { type: 'success' })
      })
      .then(fetch(`${apiUrl}/purchases`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      }))
      .catch(error => {
        console.log(error)
      })
  }

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
