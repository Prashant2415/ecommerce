import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='heading-margin'>Contact Us</h1>
      <form>
        <label>First Name</label><br />
        <input type="text"/><br />
        <label>Last Name</label><br />
        <input type="text"/><br />
        <label>Email</label><br />
        <input type="email"/><br />
        <label>Phone number</label><br />
        <input type="tel"/><br />
        <label>Contacting For</label><br />
        <textarea rows={5} cols={50}></textarea><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
