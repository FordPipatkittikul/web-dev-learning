import React, { useState, useEffect } from 'react';
import "./styles/App.css"

const App = () =>{
    const [data, setData] = useState("");
    const [height, setheight] = useState("");
    const [mass, setmass] = useState("");
    const [hairColor, sethairColor] = useState("");
    const [skinColor, setskinColor] = useState("");
    const [eyeColor, seteyeColor] = useState("");
    const [birthYear, setbirthYear] = useState("");
    const [gender, setgender] = useState("");



    useEffect(() => {
        // Assuming fetchData is an async function that returns a Promise
        const fetchData = async () => {
            const result = await fetch('https://swapi.py4e.com/api/people/1/');
            const json = await result.json();
            setData(json.name); // Set the resolved data to the state
            setheight(json.height);
            setmass(json.mass);
            sethairColor(json.hair_color);
            setskinColor(json.skin_color);
            seteyeColor(json.eye_color);
            setbirthYear(json.birth_year);
            setgender(json.gender);
        };

        fetchData();

    }, []);

    return(
        <div className='container'>
            <div className = "tag-list">
                <div className='inner'>
                    <div className = "tag"><span>#</span>{data}</div>
                    <div className = "tag"><span>#</span>{height}</div>
                    <div className = "tag"><span>#</span>{mass}</div>
                    <div className = "tag"><span>#</span>{hairColor}</div>
                    <div className = "tag"><span>#</span>{skinColor}</div>
                    <div className = "tag"><span>#</span>{eyeColor}</div>
                    <div className = "tag"><span>#</span>{birthYear}</div>
                    <div className = "tag"><span>#</span>{gender}</div>
                </div>
                <div className='fade'></div>
            </div>
        </div>
    )
}

export default App;