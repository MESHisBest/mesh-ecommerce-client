import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { purchaseIndex } from '../../api/purchases'

class PurchasesIndex extends Component {
  constructor (props) {
    super(props)
    // keep track of the purchases in our application
    // initially they will be null until we have fetched them from the api
    this.state = {
      purchases: null
    }
  }

  componentDidMount () {
    const { msgAlert, user } = this.props

    purchaseIndex(user)
      // .then(res => this.setState({ purchases: res.data.purchases }))
      .then(res => console.log(res))
      .then(() => msgAlert({
        heading: 'Loaded Purchases Successfully',
        message: 'All purchases retrieved. Click on one to go to its page.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load Purchases!',
          message: 'Could not load purchases with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { purchases } = this.state
    if (!purchases) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    const purchasesJsx = purchases.map(purchase => (
      <Link to={`/purchases/${purchase._id}`} key={purchase._id}>
        <li>
          {purchase.name}
        </li>
      </Link>
    ))
    return (
      <div>
        {purchasesJsx}
      </div>
    )
  }
}

export default PurchasesIndex
