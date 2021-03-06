import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import UnAuthProducts from './components/AllProducts/UnAuthProductCard'
import AuthProducts from './components/AllProducts/AuthProductCard'

import CarouselProducts from './components/AllProducts/CarouselProducts'

import PurchaseIndex from './components/PurchaseIndex/PurchaseIndex'
import PurchaseShow from './components/PurchaseShow/PurchaseShow'

import Stripe from './Stripe/Stripe'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main>
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute user={user} exact path='/purchases' render={() => (
            <PurchaseIndex msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
        {/* Show all Products */}
        <section className='green'>
          <Route exact path='/' render={() => (
            <Fragment>
              <CarouselProducts />
              <UnAuthProducts />
            </Fragment>
          )} />
          <AuthenticatedRoute user={user} exact path='/auth-home' render={() => (
            <Fragment>
              <CarouselProducts />
              <AuthProducts user={user} />
            </Fragment>
          )} />
          <AuthenticatedRoute user={user} exact path='/create-purchase' render={() => (
            <Fragment>
              <Stripe msgAlert={this.msgAlert} user={user} />
            </Fragment>
          )} />
          {/* Get a single purchase | show */}
          <AuthenticatedRoute user={user} exact path='/purchases/:id' render={() => (
            <PurchaseShow msgAlert={this.msgAlert} user={user} />
          )} />
        </section>
      </Fragment>
    )
  }
}

export default App
