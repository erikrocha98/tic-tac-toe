import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Board/>
  </StrictMode>,
)
