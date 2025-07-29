import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams()
  return (
    <div className='flex justify-center items-center h-20 bg-amber-600'>
        <h1 className='text-4xl font-bold'>
            {userid ? `User: ${userid}` : 'User Profile'}
        </h1>
    </div>
  )
}

export default User