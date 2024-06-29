import {Link} from 'react-router-dom';
import {search} from '../assets/icons';

const HomeInfo = ({isOpen, setIsOpen}) => {

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
  }

  return (

    <div>
        <p>
          Hi! I am a <span className='font-semibold'>Steffi Wilson Anthony</span>
          <br/>
          A Software Developer
        </p>
        <br/>
        <button 
          className='w-full text-blue-500 flex items-center justify-center gap-3 font-bold'
          onClick={handleClick}
        >
          <img src={search} className='object-contain' />
          Learn More...
        </button>
    </div>
  )
}

export default HomeInfo;