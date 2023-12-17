import React from 'react'
import { NavLink } from 'react-router-dom'

const NewLink = ({ link,text }) => {
  return (
    <NavLink className={'text-blue-600'} to={link}>{text}</NavLink>
  )
}

export default NewLink