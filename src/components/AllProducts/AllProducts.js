// imports
import React, { Component } from 'react'

class ProductShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      product: null
    }
  }

  render () {
    const exampleJsx = (
      <ul>
        <li>iPhone12</li>
        <li>Samsung S20+</li>
      </ul>
    )
    return (
      <div>
        {exampleJsx}
      </div>
    )
  }
}

export default ProductShow
