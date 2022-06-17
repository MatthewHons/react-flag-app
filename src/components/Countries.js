import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Countries = () => {
    const [data, setData] = useState([]);
    //Le useEffect se joue lorsque le composant est appelé
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className='countries'>
            <h1>COUNTRIES</h1>
            <ul>
                {
                    data.map((country, index) => 
                        <li key={index}>{country.translations.fra.common}</li>)
                }
            </ul>
        </div>
    );
};

export default Countries;