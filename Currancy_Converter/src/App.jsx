import { useState } from 'react'
import useCurrancyHook from './hooks/useCurrancyHook.js'

import './App.css'

function App() {
const [amount, setAmount] = useState(0)
 const[from,setFrom] = useState("USD")
 const[to,setTo] = useState("INR")
 const[convertedAmount,setConvertedAmount] = useState(0)
 const data = useCurrancyHook(from)
 const options = Object.keys(data)
 console.log(options)
 const convert = () => {

  setConvertedAmount(amount * data[to])

 }
 const swap =() =>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }
  return (
   
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style ={{ backgroundImage: 'URL(https://images.pexels.com/photos/12955791/pexels-photo-12955791.jpeg)'}}>
      <div className="c"></div>
    </div>
  )
}

export default App
