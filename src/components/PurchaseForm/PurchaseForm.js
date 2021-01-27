// this file is still not working yet
import React from 'react'
const PurchaseForm = ({ purchase, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Product Name</label>
    <input
      required
      placeholder="Product's Name"
      // This name should line up with the state we want to change
      name='name'
      // error point here
      value={purchase.name}
      onChange={handleChange}
    />
    <label>Product Type</label>
    <input
      required
      placeholder="Product's Type"
      // This name should line up with the state we want to change
      name='type'
      value={purchase.type}
      onChange={handleChange}
    />
    <label>Product Price</label>
    <input
      required
      placeholder="Product's Price"
      // This name should line up with the state we want to change
      name='price'
      value={purchase.price}
      onChange={handleChange}
    />
    <label>Product Picture</label>
    <input
      required
      placeholder="Product's Picture"
      // This name should line up with the state we want to change
      name='price'
      value={purchase.picture}
      onChange={handleChange}
    />
    <button type='submit'>Submit</button>
  </form>
)
export default PurchaseForm
