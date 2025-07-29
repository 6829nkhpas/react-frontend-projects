import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Details from './components/Details.jsx'
import User from './components/User.jsx'    
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Details />} />
      <Route path='user' element={<User />} />
      <Route path='user/:userid' element={<User />} />
      </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
