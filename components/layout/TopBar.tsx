import { UserButton } from '@clerk/nextjs'
import React from 'react'

const TopBar = () => {
  return (
    <div className='sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 b-blue-2 shadow-xl'>
      <h1>controle</h1>
      <div>
        <UserButton />
      </div>
    </div>
  )
}

export default TopBar
