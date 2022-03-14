import { useState } from 'react'
import './App.css'
import ilustraImg from './ilustracao.svg'

export default function App() {
  const [name, setName] = useState()
  
  return (
    <div className="App">
       <img 
        src={ilustraImg} 
        alt="ilustração de uma mulher negra usando o computador e segurando uma xícara" 
       />
       <div className="container">
        <input 
          className="input-container input-name"
          type="text" 
          placeholder="digite seu nome" 
          onChange={(e) => setName(e.target.value)}
        />
        <h1>Hello, <span>{name}</span></h1>
       </div>
    </div>
  )
}