import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, MantineProvider, } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const theme= createTheme({
    colors: {
      'cyan': [
   '#ecfeff',
    '#cffafe',
    '#a5f3fc',
    '#67e8f9',
    '#22d3ee',
    '#06b6d4',
    '#0891b2',
    '#0e7490',
    '#155e75',
    '#164e63',
     '#083344',
      ],

    'mineShaft': [
    '#f6f6f6', '#e7e7e7', '#d1d1d1','#b0b0b0', '#888888',
    '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545','#3d3d3d',
     '#2d2d2d',
    ]

    }
  })
  return (
   <MantineProvider theme={theme}>
      <BrowserRouter>
       <Routes>
        <Route path='*' element={<HomePage/>}/>
       </Routes>
      </BrowserRouter>
    </MantineProvider>
    
  );
}

export default App;
