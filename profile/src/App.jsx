import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// profile page for my self
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Profile</h1>
      <p className='text-2xl'>
        I am a software engineer with a passion for building web applications.
      </p>
      <p className='text-2xl'>
        I am a software engineer with a passion for building web applications.
      </p>
    </div>
  )
}

export default App
