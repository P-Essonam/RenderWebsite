import React from 'react'

const Td = ({ name,selected,onClick }) => {
  return (
    <td className={`p-2 border-r border-blue-200 ${(selected) ? 'bg-blue-600' : ''}`}>
       <button onClick={onClick}>{name}</button>
    </td>
  )
}

export default Td