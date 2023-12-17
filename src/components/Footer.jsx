import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPaperPlane, FaQuestionCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full flex justify-center px-6 py-10 text-noir'>
        <ul className='flex w-3/4 space-x-6 items-center '>
            <NavLink target='blank' to={'https://feedback.render.com/'} className={`whitespace-nowrap`}>Feedback</NavLink>
            <NavLink to={'/invites'} className={`whitespace-nowrap flex items-center space-x-1`}><FaPaperPlane /> <div>Invite a Frind</div></NavLink>
            <NavLink className={`whitespace-nowrap flex items-center space-x-1`}><FaQuestionCircle /> <div>Contact Support</div></NavLink>
        </ul>
    </footer>
  )
};

export default Footer;
