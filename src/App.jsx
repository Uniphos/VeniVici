import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  function Image_gen() {
    return [{"id":"edm","url":"https://cdn2.thecatapi.com/images/edm.jpg","width":500,"height":333}]
  }

  return (
    <div className="Catpic">
      <img src={Image_gen()} alt="cat" />
    </div>
  )
}

export default App
