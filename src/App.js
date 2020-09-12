import React from 'react';
import './App.css';
import Row from "./Row";
import requests from "./requests"

function App() {
  return (
    <div className="App">
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNexflixOriginals} />
    <Row title="  trending Now" fetchUrl={requests.fetchTrending} />
     
 
    </div>
  );
}

export default App;
