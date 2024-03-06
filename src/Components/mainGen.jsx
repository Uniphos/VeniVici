import React from 'react';
import { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import './mainGen.css';

function MainGen() {
    const[catImage, setCatImage] = useState(null);
    const[breed, setBreed] = useState(null);
    const[weight, setWeight] = useState('');
    const[origin, setOrigin] = useState('');
    const[lifeSpan, setLifeSpan] = useState('');
    const[dataArray, setDataArray] = useState([]);

    function Image_gen() {
        let url = new URL("https://api.thecatapi.com/v1/images/search");
        url.searchParams.append('has_breeds', '1');

        fetch(url, { headers: { 'x-api-key': ACCESS_KEY } })
            .then((response) => response.json())
            .then((data) => {
                setCatImage(data[0].url);
                setBreed(data[0].breeds[0].name);
                setWeight(data[0].breeds[0].weight.imperial + ' lbs');
                setOrigin(data[0].breeds[0].origin);
                setLifeSpan(data[0].breeds[0].life_span);
            });
    }
    function addListName() {
        dataArray.push(breed);
        console.log(dataArray);
    }
    function addListWeight() {
        dataArray.push(weight);
    }
    function addListOrigin() {
        dataArray.push(origin);
    }
    function addListLifeS() {
        dataArray.push(lifeSpan);
    }

    return (
        <div className="catPic">
            <h1>Cat Nip</h1>
            <h2>Random Cat Image Generator</h2>
            <br/>
            <div className='container'>
                <div className='item'>
                <button onClick={addListName}>{breed}</button>
                </div>
                <div className='item'>
                <button onClick={addListWeight}>{weight}</button>
                </div>
                <div className='item'>
                <button onClick={addListOrigin}>{origin}</button>
                </div>
                <div className='item'>
                <button onClick={addListLifeS}>{lifeSpan}</button>
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