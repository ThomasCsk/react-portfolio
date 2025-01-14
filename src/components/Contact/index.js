import React, {useState} from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function validateEmail(email){
    const re = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
    re.test(String(email).toLowerCase());
  }

  function handleChange(e){
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } 
      else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    }  
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(formState); 
  }


  return(
    <section className='contact'>
      <h1>Contact me</h1>
      <form id="contact-form" className='contact-form' onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={formState.name} onChange={handleChange} />
        </div>
        <div className='form-input'>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={formState.email} onChange={handleChange} />
        </div>
        <div className='form-input'>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="3"  defaultValue={formState.message} onChange={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Contact;