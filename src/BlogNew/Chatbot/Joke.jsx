import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      const { setup, punchline } = response.data;
      setJoke(`${setup} ${punchline}`);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
   
<div>
    <Button variant="outlined" onClick={fetchJoke}>
            Click here to have a great day!
          </Button>{joke && <p>{joke}</p>}</div>
  );
};

export default JokeGenerator;
