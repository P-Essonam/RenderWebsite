import React from 'react'

const Button = ({name, icon, onClick}) => {
  return (
    <button className='text-white flex justify-center items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg' onClick={onClick}>
        <div>{name}</div>
        {icon && <div>{icon}</div>}
    </button>
  )
}

export default Button