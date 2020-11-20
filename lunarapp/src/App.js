import logo from './logo.svg';
import './App.css';
import data from './data.json'
import React, { useContext, useState, useEffect } from "react";
import ListItem from './ListItem';


function App() {

 

  return (
    <div className="App">
      <h1>Lunar App</h1>
      {data.data.transactions.map(transaction => {
        return (
          <ListItem data = {transaction}></ListItem>
        )
      })}
      
    </div>
  );
}

export default App;
