import React from 'react';
import Routes from './routes';
import './App.css';
import './Assets/css/bootstrap.min.css';
import './Assets/css/nowKit.css';
import {InfoProvider} from './Context/AuthContext';

function App() {
  return (
    <>
    <InfoProvider>
    <Routes />
    </InfoProvider>
    </>
  );
}

export default App;
