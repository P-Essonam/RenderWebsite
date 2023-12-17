import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header,Footer } from '../components'

const Layout = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout