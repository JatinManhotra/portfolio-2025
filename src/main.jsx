import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContextProvider from './context/MyContext.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <MyContextProvider>
      <App />
    </MyContextProvider>
    </HashRouter>
  </StrictMode>,
)
