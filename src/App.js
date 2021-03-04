import { useEffect, useState } from 'react';
import "./style.css";
import Home from "./Home.js";
function App() {

  const [rickData, setRickData] = useState(null);
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      setRickData(data);
      setLoading(false);
    })
  }, [])

  return (
    <div className="App">
      {
        (loading === false) ?
        <Home rickData={rickData} />
        : <div className="loading">Loading</div>
      }
    </div>
  );
}

export default App;
