import React from 'react'
// import ReactDOM from 'react-dom'
import StripeCheckout from 'react-stripe-checkout'
// import axios from 'axios'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'
import apiUrl from '../apiConfig'
// import { purchaseCreate } from './../api/purchases'

import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function CheckoutForm (props) {
  const { product, user } = props

  // stripe token here

  const handleToken = stripeToken => {
    const body = {
      stripeToken,
      product
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }

    return fetch(`${apiUrl}/purchases`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        const { status } = response
        if (status === 201) {
          toast('Success! View your purchase in My Orders', { type: 'success' })
        } else {
          toast('Failed to Purchase!', { type: 'failed' })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="checkout-container">
      <StripeCheckout
        stripeKey="pk_test_51IF7lSC1DE44tNVIpsZ91JGlVyJ9htoV0OvzfS08SBeOpWmQTf4j22tPOXbJdCCG28dZCmXIrFF13PySFKEVYGfe00KrsTvyZs"
        token={handleToken}
        amount={product.price * 100}>
      </StripeCheckout>
    </div>
  )
}

export default withRouter(CheckoutForm)
