import React from 'react'
import { Table } from '../components'
import { FaSearch } from 'react-icons/fa'


const App = () => {
  return (
    <main className='grow w-full flex flex-col items-center'>

        <h1 className='w-3/4 mt-6 text-3xl font-semibold'>Overview</h1>
        <div className='w-full flex  justify-center items-center mt-4 g'>
            <div className='border border-blue-100 p-2 rounded-l w-3/4 flex space-x-2 items-center'>
              <div><FaSearch  className='text-slate-300'/></div>
              <input className='grow outline-none' placeholder='Search servicies' type="search" name="" id="" />
            </div>
        </div>
        <Table />
    </main>
  )
}

export default App