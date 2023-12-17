import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../components'

const BluePrints = () => {
  return (
    <main  className='grow flex flex-col w-full items-center'>
        <div className='flex flex-col justify-center items-center w-1/3 space-y-4 mt-8'>
            <h2 className='text-black text-xl font-semibold'>You haven’t created any Blueprint instances yet.</h2>
            <div className='text-center text-noir pb-8'>
                A render.yaml file specifies your Render <NavLink className={'text-blue-600'} to={'https://docs.render.com/docs/infrastructure-as-code'}>infrastructure as</NavLink> code. You can use it to create, update, and connect all your services at once, with automatic syncing of resources from your render.yaml file. <NavLink className={'text-blue-600'} to={'https://docs.render.com/docs/infrastructure-as-code'}>Learn more</NavLink>.
            </div>

            <Button name={'New Blueprint Instance'} />
        </div>
    </main>
  )
}

export default BluePrints