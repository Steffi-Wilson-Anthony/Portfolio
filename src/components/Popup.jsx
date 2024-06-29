import React from 'react'
import {ai} from '../assets/images'
import { Link } from 'react-router-dom'
import {close} from '../assets/icons'
import { useNavigate } from 'react-router-dom';

const Popup = ({isOpen, setIsOpen}) => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(false);
    }

    const handleLink = (path) => (e) => {
        e.preventDefault();
        document.body.classList.remove("overflow-y-hidden");
        navigate(path);
        setIsOpen(false);
    }

  return (
    <section className='entry-animation absolute z-20 w-full h-screen overlay '>
        <div className='bg-transparent w-full h-screen flex items-center justify-center'>
            <button className='absolute top-0 right-0 m-4' onClick = {handleClick}>
                <img src={close} className='p-2 popup-bg popup-glow animate-popup rounded-lg'/>
            </button>
            <div className='bg-transparent rounded-2xl 
                flex lg:flex-row flex-col items-center justify-center gap-20
            '>
                <div>
                    <img src={ai} className='rounded-2xl image-size
                    popup-bg popup-glow animate-popup rounded-lg text-center'/>
                </div>

                <div className='flex lg:flex-col flex-row gap-10'>
                    <Link to="/about" className=" text-white bg-blue-500 
                        popup-bg popup-glow animate-popup rounded-lg p-6 text-center font-semibold
                    "
                    onClick={handleLink('/about')}
                    >
                        About
                    </Link>
                    <Link to="/projects" className="text-white bg-blue-500
                        popup-bg popup-glow animate-popup rounded-lg p-6 text-center font-semibold
                    "
                    onClick={handleLink('/projects')}
                    >
                        Projects
                    </Link>
                    <Link to="/contact" className="text-white bg-blue-500
                        popup-bg popup-glow animate-popup rounded-lg p-6 text-center font-semibold
                    "
                    onClick={handleLink('/contact')}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Popup