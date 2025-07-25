import { useState } from 'react'
import useCurrancyHook from './hooks/useCurrancyHook.js'
import {InputBox} from './components/index.js'

import './App.css'

function App() {
const [amount, setAmount] = useState(0)
 const[from,setFrom] = useState("USD")
 const[to,setTo] = useState("INR")
 const[convertedAmount,setConvertedAmount] = useState(0)
 const data = useCurrancyHook(from)
 const options = Object.keys(data.conversion_rates || {})
 console.log(options)
 const convert = () => {

  setConvertedAmount(amount * (data.conversion_rates?.[to] || 0))

 }
 const swap =() =>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }
  return (
   
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style ={{ backgroundImage: 'URL(https://images.pexels.com/photos/12955791/pexels-photo-12955791.jpeg)'}}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 bg-white/30 rounded-lg p-5 backdrop-blur-sm">
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
          <div className="w-full mb-1">
            <InputBox 
            label="from"
            amount={amount}
            currencyOptions={options}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            className="w-full p-2 rounded-md"
            /> </div>
            <div className="relative w-full h-0.5">
             <button type="button" className="absolute left-0 -bottom-3 bg-white text-blue-500 px-2 py-0.5" onClick={swap}>Swap</button>
             </div>
             <div className="w-full mb-1">
            <InputBox
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            amountDisable={true}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            className="w-full p-2 rounded-md"
            /> </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold p-2 rounded-md">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
