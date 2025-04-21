import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MantineProvider,Slider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <MantineProvider >
      
      <HomePage/>
    </MantineProvider>
    </div>
  );
}

export default App;
