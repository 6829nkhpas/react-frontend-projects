import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // profile page for my self
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Welcome to My Profile</h1>
      <p className='text-lg text-gray-600'>This is my personal profile page</p>
      <button 
        className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  )
}

export default App
