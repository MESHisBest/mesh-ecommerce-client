import React, { Component } from 'react'
import apiUrl from './../../apiConfig'

import { purchaseCreate } from '../../api/purchases'
import { Redirect, withRouter } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

// import Button from 'react-bootstrap/Button'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

// make a single purchase
class PurchaseCreate extends Component {
  constructor (props) {
    super(props)
    // initially our purchase will be empty until they are filled in
    this.state = {
      purchase: {
        name: '',
        price: ''
      },
      // createdId will be null, until we successfully create a purchase
      createdId: null
    }
  }

  handleClick = event => {
    // event.preventDefault()
    const { user } = this.props
    const { purchase } = this.state
    // create a purchase, pass it the purchase data and the user for its token
    purchaseCreate(purchase, user)
      // set the createdId to the id of the purchase we just created
      .then(res => {
        this.setState({ purchase: res.data.product, createdId: res.data.product.id })
        // pass the response to the next .then so we can show the title
        return res
      })
      // .then(res => msgAlert({
      //   heading: 'Successfully Purchase',
      //   message: `Purchase has been made successfully. Now viewing ${res.data.purchase.name}.`,
      //   variant: 'success'
      // }))
      // .catch(error => {
      //   msgAlert({
      //     heading: 'Failed to purchase',
      //     message: 'Could not create purchase with error: ' + error.message,
      //     variant: 'danger'
      //   })
      // })
  }

  // stripe token here

      handleToken = stripeToken => {
        const { product, user } = this.props

        const body = {
          stripeToken,
          purchase: product
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
              toast('Failed to Purchase!', { type: 'error' })
            }
          })
          .catch(error => {
            console.log(error)
          })
      }

      render () {
        const { product } = this.props
        // destructure our purchase and createdId state
        const { createdId } = this.state
        // if the purchase has been created and we set its id
        if (createdId) {
          // redirect to the purchases show page
          return <Redirect to={`/purchases/${createdId}`} />
        }

        return (
          <div className="checkout-container">
            <StripeCheckout
              stripeKey="pk_test_51IF7lSC1DE44tNVIpsZ91JGlVyJ9htoV0OvzfS08SBeOpWmQTf4j22tPOXbJdCCG28dZCmXIrFF13PySFKEVYGfe00KrsTvyZs"
              token={this.handleClick}
              amount={product.price * 100}>
            </StripeCheckout>
          </div>
        )
      }
}
export default withRouter(PurchaseCreate)
