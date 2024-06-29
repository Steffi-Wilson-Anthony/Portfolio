import React from 'react'

const Alert = ({type, text}) => {
  return (
    <div className='absolute top-10 z-30 right-0
    w-full h-24 bg-transparent flex justify-center items-center text-white
    '>
        <div className='bg-slate-300 p-0.5 rounded-lg'>
        <div className={`${type == 'danger' ? 'bg-red-800' : 'bg-blue-800'} p-2 text-indigo-100
        leading-none rounded-lg flex lg:inline-flex items-center`} role="alert">
            <p
                className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
            >{type === 'danger' ? 'Failed' : 'Success'}</p>
            <p class="mr-2 text-left">
                {text}
            </p>
        </div>
        </div>
    </div>
  )
}

export default Alert