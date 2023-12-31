import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { FaPlus,FaUser,FaCaretDown } from 'react-icons/fa'
import { navLinks,externalNavLinks } from '../constants';
import Button from './Button';
import UserDialog from './UserDialog';
import NewDialog from './NewDialog';
import { useState } from 'react';

const Header = () => {

  const [open, setOpen] = useState(false)

  const buttonClicked = () => {
    setOpen(true)
  }
  return (
    <header className='sticky top-0 w-full flex justify-center items-center p-4 border-b border-blue-200 text-noir bg-white'>
        <section className='w-3/4 p-2 flex justify-between'>

            <div className='flex grow'>
                <div className='flex space-x-8'>
                    <div className='flex space-x-2'>
                        <Link to={'/'} className='text-3xl font-semibold'>Render</Link>
                    </div>
                    <ul className='flex justify-between items-center space-x-6'>
                      {
                        navLinks.map((item) => (
                          <li key={item.label}><NavLink to={item.href} className={`whitespace-nowrap`}>{item.label}</NavLink></li>
                        ))
                      }
                    </ul>

                </div>

                
                <div className='border-r border-blue-200 mx-8 my-3'></div>
                

                <ul className='flex items-center space-x-6'>
                  {
                    externalNavLinks.map((item) => (
                      <Link key={item.label} target='blank' to={item.href}>{item.label}</Link>
                      )
                    )
                  }
                  <Link>Help</Link>
                </ul>
            </div>

            <div className='flex items-center space-x-6'>
              <Button name={'New'} icon={<FaPlus/>} onClick={(e) => {e.preventDefault(); buttonClicked()}}/>
              <NewDialog  open={open} setOpen={setOpen}/>
              <UserDialog />
            </div>
            

        </section>
    </header>
  )
};

export default Header;
