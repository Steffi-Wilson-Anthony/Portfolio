import { useState ,useRef } from 'react'
import emailjs from '@emailjs/browser'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Steffi Wilson Anthony",
        from_email: form.email,
        to_email: 'steffiwilsonanthony1923@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({
        show: true,
        text: 'Message sent successfully',
        type: 'success'
      })

      setTimeout(() => {
        hideAlert();
        setForm({name:'', email:'', message:''});
      }, 3000)

    }).catch((error) => {
      setIsLoading(false);
      console.log(error)
      showAlert({
        show: true,
        text: 'Message not sent',
        type: 'danger'
      })
    })
  }

  return (
    <section className='w-full h-screen'>
      {alert.show && <Alert {...alert}/>}
      <div className='w-full h-screen contact-bg'>
        <div className='contact-overlay'>

        <div className='form-bg p-24 flex flex-col items-center'>
          <h1 className='head-text'>
            <span className='purple-gradient_text'>Get in Touch</span>
          </h1>
          
          <form className='w-full flex flex-col gap-5 mt-14' onSubmit = {handleSubmit}>
            <label className='text-black-500 font-semibold'>
              Name
              <input
                type = "text"
                name = "name"
                className='input'
                placeholder='steffi'
                required
                value = {form.name}
                onChange = {handleChange}
              />
            </label>

            <label className='text-black-500 font-semibold'>
              Email
              <input
                type = "email"
                name = "email"
                className='input'
                placeholder='steffi@gmail.com'
                required
                value = {form.email}
                onChange = {handleChange}
              />
            </label>

            <label className='text-black-500 font-semibold'>
              Your Message
              <textarea
                name = "message"
                rows = {4}
                className='textarea'
                placeholder='Let me know how I can help you !'
                required
                value = {form.message}
                onChange = {handleChange}
              />
            </label>
            <button
              type = "submit"
              className='btn'
              disabled = {isLoading}
            >
              {isLoading ? 'Sending...' : 'Submit' }
            </button>
          </form>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact