import React from 'react'
import { apps } from '../constants'
import { FaBookmark,FaCheckCircle } from 'react-icons/fa'

const Table = () => {


    return (
        <div className="w-full">
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr className='uppercase'>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-500 sm:pl-0">
                        service name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-500">
                        status
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-500">
                        type
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-500">
                        runtime
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-500">
                        region
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-500">
                        last deployed
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {apps.map((person) => (
                      <tr key={person.name+Math.random()} className=' capitalize'>
                        
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 relative" >            
                            <div className='absolute left-6'>{person.name}</div>
                            <FaBookmark className=''/>   
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 relative" >
                            <div className='absolute left-10'>{person.status}</div>
                            <FaCheckCircle className='text-green-700 text-base'/>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{person.type}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{person.runtime}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{person.region}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{person.lastDeployed}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right font-medium sm:pr-0 text-2xl">...</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Table

