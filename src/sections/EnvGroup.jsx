import React from 'react'
import { Content } from '../components'
const EnvGroup = () => {
  return (
    <main className='grow flex flex-col w-full items-center'>
        <Content title={'You haven’t created any environment groups yet.'} text={'Environment groups are collections of environment variables and secret files that you can share across multiple services.'} name={'New Environment Group'}/>
    </main>
  )
}

export default EnvGroup