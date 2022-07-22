import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// llama a funcion App
ReactDOM.createRoot(document.getElementById('root')).render( //root llama al script del index.html y renderiza la funcion app
  <React.StrictMode>
    {/* llamado a funcion, en vez de App(); */}
    <App />
  </React.StrictMode>
)
