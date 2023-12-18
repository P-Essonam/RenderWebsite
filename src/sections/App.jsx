import React, { useState } from 'react'
import { NoServicesMessage, Table,Td } from '../components'
import { FaSearch } from 'react-icons/fa'
import { tdData } from '../constants'


const App = () => {
  
  const [selectedButton, setSelectedButton] = useState(tdData[0].name);

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <main className='grow w-full flex flex-col items-center'>

        <h1 className='w-3/4 mt-6 text-3xl font-semibold'>Overview</h1>
        <div className='w-full flex  justify-center items-center mt-4 g'>
            <div className='border border-blue-100 p-2 rounded-l w-3/4 flex space-x-2 items-center'>
              <div><FaSearch  className='text-slate-300'/></div>
              <input className='grow outline-none' placeholder='Search servicies' type="search" name="" id="" />
            </div>
        </div>
        <div className='w-3/4 flex justify-end mt-8'>
          <table className='border border-blue-200 rounded-2xl'>
            <tbody>
              <tr>
                {
                  tdData.map((item) => (
                    <Td name={item.name} key={item.name} selected={selectedButton === item.name} onClick={(e) => {e.preventDefault();handleButtonClick(item.name)}}/>
                    )
                  )
                }
              </tr>
            </tbody>
          </table>
        </div>

        <div className='w-3/4 grow'>

            {
              (selectedButton === tdData[0].name ||  selectedButton === tdData[2].name) ? <Table key={selectedButton} /> : '' 
            }
            {
              (selectedButton === tdData[1].name ) ? <NoServicesMessage key={selectedButton} /> : '' 
            }
        </div>

        

    </main>
  )
}

export default App