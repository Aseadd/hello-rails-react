import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Greeting() {
    const [greeting, setGreeting] = useState([])
    useEffect(() => {
        axios.get('/api/v1/messages')
        .then(response => {
            setGreeting(response.data.message);
            console.log(response)
        })
        
    }, []);
    return (
        <>
        <h1>Random Greetings</h1>
        <h1>{greeting}</h1>
        </>
    );

}

export default Greeting;