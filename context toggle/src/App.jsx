import { useState } from 'react'
import './App.css'
import Card from './components/cards.jsx'
import ThemeBtn from './components/ThemeBtn.jsx'
import { ThemeContext } from './contexts/theme.js'
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    const html = document.querySelector('html')
    if (themeMode === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [themeMode])

  return (
    <ThemeContext.Provider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center bg-gray-50 dark:bg-gray-900">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App