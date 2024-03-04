import { useState } from 'react'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import prevImg from './Components/previousImg.jsx'
import banFilter from './Components/banFilter.jsx'
import mainGen from './Components/mainGen.jsx'



function App() {
  const[catImage, setCatImage] = useState(null);

  function Image_gen() {
    fetch('https://api.thecatapi.com/v1/images/search', { headers: { 'x-api-key': ACCESS_KEY } })
      .then((response) => response.json())
      .then((data) => {
        setCatImage(data[0].url);
      });
  }

  return (
    <div className="Catpic">
      <button onClick={()=>Image_gen()}>click here</button>
      <br />
      <img src={catImage} className='cat_img' />
    </div>
  )
}

export default App
