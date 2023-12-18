import React from 'react'
import { no } from '../assets/images'

const NoServicesMessage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <img src={no} alt={no} />
        No Suspended Services
    </div>
  )
}

export default NoServicesMessage