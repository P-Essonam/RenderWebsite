import React from 'react'
import Button from './Button'

const Content = ({ name,text,title }) => {
  return (
    <div className='flex flex-col justify-center items-center w-1/3 space-y-4 mt-8'>
        <h2 className='text-black text-xl font-semibold'>{title}</h2>
        <div className='text-center text-noir pb-8'>
            {<div>{text}</div>}
        </div>

        <Button name={name} />
    </div>
  )
}

export default Content