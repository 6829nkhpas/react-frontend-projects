import { useState ,useCallback,useEffect} from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const generatePassword = useCallback(() => {
    let pass =" ";
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) {
      str += '0123456789';
    }
    if (includeSymbols) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?';
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);

  },[length, includeNumbers, includeSymbols]);
  useEffect(() => {
    generatePassword();
  }
  , [length, includeNumbers, includeSymbols, generatePassword]);

  return (
    <div className="futuristic-bg min-h-screen flex items-center justify-center">
      <div className="glassmorphism-container w-full max-w-md mx-auto px-6 py-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center mb-8 neon-text tracking-widest">Password Generator</h1>
        <div className="flex shadow-lg rounded-xl overflow-hidden mb-6 bg-black/60">
          <input 
            type="text"
            value={password}
            readOnly
            placeholder="Generated Password"
            className="w-full px-4 py-3 bg-transparent text-neon-green border-none focus:outline-none text-lg font-mono tracking-wider"
          />
          <button onClick={window.navigator.clipboard.writeText.bind(window.navigator.clipboard, password)}
            className="copy-btn px-4 py-2 neon-border ml-2 rounded-r-xl font-bold text-white hover:scale-105 transition-transform duration-200"
          >Copy</button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <label htmlFor="length" className="text-neon-blue font-semibold">Length: <span className="text-neon-pink">{length}</span></label>
            <input
              type="range"
              min={8}
              value={length}
              max={100}
              className="futuristic-slider flex-1"
              onChange={e => setlength(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="includeNumbers" className="text-neon-blue font-semibold">Include Numbers</label>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="includeNumbers"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(prev => !prev)}
              />
              <span className="slider"></span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="includeSymbols" className="text-neon-blue font-semibold">Include Symbols</label>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="includeSymbols"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(prev => !prev)}
              />
              <span className="slider"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
