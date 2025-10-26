import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
//import 'virtual:windi.css' // placeholder for compatibility

AOS.init({ duration: 900, once: true })

createRoot(document.getElementById('root')).render(<App />)
