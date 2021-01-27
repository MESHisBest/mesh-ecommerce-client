import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PurchaseForm from '../PurchaseForm/PurchaseForm'
import { purchaseCreate } from '../../api/purchases'
// make a single purchase
class PurchaseCreate extends Component {
  constructor (props) {
    super(props)
    // initially our purchase will be empty until they are filled in
    this.state = {
      purchase: {
        name: '',
        type: '',
        price: '',
        picture_url: ''
      },
      // createdId will be null, until we successfully create a purchase
      createdId: null
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    const { user, msgAlert } = this.props
    const { purchase } = this.state
    // create a movie, pass it the movie data and the user for its token
    purchaseCreate(purchase, user)
      // set the createdId to the id of the movie we just created
      // .then(res => this.setState({ createdId: res.data.movie._id }))
      .then(res => {
        this.setState({ createdId: res.data.purchase._id })
        // pass the response to the next .then so we can show the title
        return res
      })
      .then(res => msgAlert({
        heading: 'Successfully Purchase',
        message: `Purchase has been made successfully. Now viewing ${res.data.purchase.name}.`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to purchase',
          message: 'Could not create purchase with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  // when an input changes, update the state that corresponds with the input's name
  handleChange = event => {
    // in react, an event is actually a SyntheticEvent
    // to ensure the properties are not set to null after handleChange is finished
    // we must call event.persist
    event.persist()
    this.setState(state => {
      // return our state change
      return {
        // set the purchase state, to what it used to be (...state.purchase)
        // but replace the property with `name` to its current `value`
        // ex. name could be `title` or `director`
        purchase: { ...state.purchase, [event.target.name]: event.target.value }
      }
    })
  }
  render () {
    // destructure our movie and createdId state
    const { purchase, createdId } = this.state
    // if the movie has been created and we set its id
    if (createdId) {
      // redirect to the movies show page
      return <Redirect to={`/purchases/${createdId}`} />
    }
    return (
      <div>
        <h3>Create Movie</h3>
        <PurchaseForm
          movie={purchase}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
export default PurchaseCreate
