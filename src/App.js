import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
        destination = "Saint Anne"
        country = "Martinique"
        photo = "http://www.guidemartinique.com/images/visites/sainte-anne-336.jpg"
        distance = "6 837 km"
        />
        <Travel
        destination = "Barcelone"
        country = "Espagne"
        photo = "https://www.nacel.fr/medias/_cache/produits/23/imagePrincipale/1024_768/cours-groupe-4-barcelone-parc-guell.jpg"
        distance = "1 037,5 km"
        />
      </div>
    );
  }
}

export default App;
