import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Greeting() {
    const [greeting, setGreeting] = useState('Greeting 1!');
    useEffect(() => {
        const response = axios.get('/api/v1/message');
        setGreeting(response.data.message);
        console.log(response)
    }, []);
    return (
        <h1>{greeting}</h1>
    );

}

export default Greeting;