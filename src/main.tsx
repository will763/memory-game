import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GloblaStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GloblaStyle />
    <App />
  </React.StrictMode>
)
