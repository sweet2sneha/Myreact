import React from 'react'
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <h1> Contacts</h1>
        <div className='contact-inner'>
          <form action="">
            <div className='form-group'>
              <label htmlFor=""> Fullname</label>
              <input type="text" placeholder='fullname' />
            </div>
            <div className='form-group'>
              <label htmlFor=""> Email Id</label>
              <input type="email" placeholder='emailid' />
            </div>
            <div className='form-group'>
              <label htmlFor=""> phone</label>
              <input type="tel" placeholder='phone' />
            </div>
            <div className='form-group'>
              <label htmlFor=""> any queries?</label>
              <input type="text" placeholder='tell us about your querry' />
            </div>
            <div className='form-submit'>
              <button type='submit'> SUBMIT </button>
            </div>
          </form>

        </div>
    </div>
  )
}

export default Contact