import { useState ,useCallback} from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const generatePassword = useCallback(() => {

  })

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-red-600'>
      <h1 className='flex shadow rounded-lg overflow-hidden mb-4'> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        readOnly
        placeholder='Generated Password'
        className='w-full px-4 py-2 bg-gray-900 text-green-400 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-1'>
        <div className='flex item-center gap-x-1'>
          <input type="range"
           min={8}
           value={length}
           name=""
           id=""
           max={100}
           className='cursor-pointer w-full h-2 bg-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500'
            onChange={(e) => setlength(e.target.value)}
           />
           <label htmlFor="length">Length:{length}</label>

        </div>

        <div className='flex item-center gap-x-1'>
          <input type="checkbox"
          name=""
          id=""
          checked={includeNumbers}
          onChange={() => setIncludeNumbers((prev) => !prev)}
          className='cursor-pointer'
          />
          <label htmlFor="includeNumbers"> Include Numbers</label>

          </div>  
        <div className='flex item-center gap-x-1'>
          <input type="checkbox"
          name=""
          id=""
          checked={includeSymbols}
          onChange={() => setIncludeSymbols((prev) => !prev)}
          className='cursor-pointer'
          />
          <label htmlFor="includeSymbols">Include Symbols</label>
        </div>
        

      </div>
      
    </div>
  )
}

export default App
