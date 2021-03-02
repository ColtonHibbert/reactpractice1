import { useEffect, useState } from 'react';
import logo from './logo.svg';
import "./style.css";
import Card from "./Card.js";
function App() {

  const [rickData, setRickData] = useState(null);
  const [loading, setLoading ] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    }).then(res => res.json())
    .then(data => {
      setRickData(data);
    })
  }, [])

  return (
    <div className="App">
      <button width="40" height="40" onClick={() => console.log(rickData)}>click</button>
      {
        (loading !== null) ?
        rickData.map(characterData => {
          return (
            <Card characterData={characterData} />
          )
        })
        : <div className="loading">Loading</div>
      }
      
    </div>
  );
}

export default App;
