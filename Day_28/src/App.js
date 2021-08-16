import "./App.css";
import { useState } from "react";

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});


  const handleKeypress = (e) => {
    // e.preventDefault();
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    updatePlaceData();
  }
};

  const updatePlaceData = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=ec7dd1fb4c574b1d95873145211608&q=${place}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            onKeyPress={handleKeypress}
          />
          {/* <button className="btn" onClick={updatePlaceData}>
            Submit
          </button> */}
          <button className="btn" onClick={updatePlaceData} type="submit">
            Submit
          </button>
        </div>
      </div>
      <div className="card">
        {placeData.location ? (
          <div className="card_data">
            <img src={placeData.current.condition.icon} alt="img" />
            <div className="data">
              <h1> {placeData.current.temp_c}°</h1>
              {placeData.current.condition.text}
              <h3>{placeData.location.name}</h3>
              <div className="card_foot">
              <div> <span className="card_foot_info">Wind: </span>{placeData.current.wind_mph} KM </div>
              <div> <span className="card_foot_info">Precipitation: </span>{placeData.current.precip_mm} %</div>
              <div><span className="card_foot_info">Humidity: </span> {placeData.current.humidity} %</div>
               
                
               
              </div>
            </div>
          </div>
        ) : (
          <h2>No Data Found</h2>
        )}
      </div>
    </div>
  );
}

export default App;
