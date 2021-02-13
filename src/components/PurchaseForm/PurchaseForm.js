import React from 'react'
const PurchaseForm = ({ purchase, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Product Review</label>
    <input
      required
      placeholder="Enter product's review here"
      // This name should line up with the state we want to change
      namne='review'
      value={purchase.review}
      onChange={handleChange}
    />
    <button type='submit'>Submit</button>
  </form>
)
export default PurchaseForm
