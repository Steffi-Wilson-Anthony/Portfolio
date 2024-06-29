import React from 'react'
import {Link} from 'react-router-dom';
import {lab} from '../assets/icons'

const Lab = () => {
  return (
    <div>
        <Link to = "/explore" className='font-semibold flex items-center justify-center gap-4'>
          <img src = {lab} className='object-contain'/>
          <p>
            Explore<br/>Laboratory
          </p>
        </Link>
    </div>
  )
}

export default Lab;