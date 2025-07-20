import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")



  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color, height: "100vh"}}>
      <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => {console.log("clicked"); setColor('red');} } className='outline-none text-black shadow-lg px-4 py-1 rounded-full'>red</button>
            <button onClick={() => {console.log("clicked"); setColor('green');} } className='outline-none text-black shadow-lg px-4 py-1 rounded-full'>green</button>
            <button onClick={() => {console.log("clicked"); setColor('pink');} } className='outline-none text-black shadow-lg px-4 py-1 rounded-full'>pink</button>


        </div>
      </div>
    </div>
  )
}

export default App
