import React from 'react'
// import ReactDOM from 'react-dom'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'
// import './styles.css'

toast.configure()

function CheckoutForm (product) {
  product = React.useState({
    name: product.product.name,
    price: product.product.price,
    picture: product.product.pictureUrl
  })

  async function handleToken (token, addresses) {
    console.log(token)
    const response = await axios.post(
      'https://ry7v05l6on.sse.codesandbox.io/checkout',
      { token, product }
    )
    console.log(response)
    const { status } = response
    console.log('Response:', response)
    if (status === 200) {
      toast('Success! Check email for details', { type: 'success' })
    } else {
      toast('Something went wrong', { type: 'error' })
    }
  }

  return (
    <div className="checkout-container">
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={product.price * 100}
        name={product.name}
        billingAddress
        shippingAddress
      />
    </div>
  )
}

export default withRouter(CheckoutForm)
