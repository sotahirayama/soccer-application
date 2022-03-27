import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header'
import MapHeader from './components/MapHeader'
import EventAddHeader from './components/EventAddHeader'
import EventAdd from './components/EventAdd'
import EventShowHeader from './components/EventShowHeader'
import EventInformation from './components/EventInformation'
// import { Grid } from '@material-ui/core';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
    </div>
    <div>
      <div className='left'>
        <MapHeader />
        <App /> 
      </div>
      <div className='right'>
        <EventAddHeader />
        <EventAdd/>
        <EventShowHeader/>
        <EventInformation/>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
