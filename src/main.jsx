import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Primercomponente from './primerComponente.jsx'
import segundoComponente from './segundoComponente.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <segundoComponente />,
    <App />,
    <Primercomponente />
  </StrictMode>,
)
