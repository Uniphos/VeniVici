import React from 'react';
import { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import './mainGen.css'

function MainGen() {
    const[catImage, setCatImage] = useState(null);
    const[breed, setBreed] = useState(null);
    const[weight, setWeight] = useState('');
    const[origin, setOrigin] = useState('');
    const[lifeSpan, setLifeSpan] = useState('');


    function Image_gen() {
        let url = new URL("https://api.thecatapi.com/v1/images/search");
        url.searchParams.append('has_breeds', '1');

        fetch(url, { headers: { 'x-api-key': ACCESS_KEY } })
            .then((response) => response.json())
            .then((data) => {
                setCatImage(data[0].url);
                setBreed(data[0].breeds[0].name);
                setWeight(data[0].breeds[0].weight.imperial);
                setOrigin(data[0].breeds[0].origin);
                setLifeSpan(data[0].breeds[0].life_span);
            });
    }
    function addListBreed() {
        
    }

    return (
        <div className="catPic">
            <h1>Cat Nip</h1>
            <h2>Random Cat Image Generator</h2>
            <br/>
            <div className='container'>
                <div className='item'>
                <button onClick={addListBreed}>{breed}</button>
                </div>
                <div className='item'>
                <button>{weight} lbs</button>
                </div>
                <div className='item'>
                <button>{origin}</button>
                </div>
                <div className='item'>
                <button>{lifeSpan}</button>
                </div>
            </div>
            <br/>
            <img src={catImage} className='cat_img' />
            <br/> <br/>
            <button onClick={()=>Image_gen()}>click here</button>
        </div>
    );
}

export default MainGen;