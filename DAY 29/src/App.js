import React, { useEffect } from "react";
import { change_data, change_city, toogle_theme } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  let city = useSelector((state) => state.city);
  let data = useSelector((state) => state.data);
  let theme = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(change_data(city));
  }, []);

  return (
    <div className={theme ? "cont" : "cont-dr"}>
      <button
        className={theme ? "toogle" : "toogle-dr"}
        onClick={() => dispatch(toogle_theme)}
      >
        {theme ? "Light" : "Dark"}
      </button>
      <div className={theme ? "search" : "search-dr"}>
        <input
          type="text"
          onChange={(e) => {
            dispatch(change_city(e.target.value));
          }}
        ></input>
        <button onClick={() => dispatch(change_data(city))}>Send</button>
      </div>
      <div className={theme ? "weather" : "weather-br"}>
        {(data.current && (
          <>
            <div className="icon">
              00
              <img src={data.current.condition.icon} alt="IMAGE" />
              <div id="temp">{data.current.feelslike_c} *c</div>
              <div id="text">{data.current.condition.text}</div>
              <div id="place">{data.location.name}</div>
            </div>
            <div className={theme ? "info" : "info-br"}>
              <div className="blocks">
                <div className="wind">{data.current.wind_mph} mph</div>
                <span id="infoItem">Wind</span>
              </div>
              <div className="blocks">
                <div className="precipitation">{data.current.precip_mm} mm</div>
                <span id="infoItem">precipitation</span>
              </div>
              <div className="blocks">
                <div className="humidity">{data.current.humidity}</div>
                <span id="infoItem">Humidity</span>
              </div>
            </div>
          </>
        )) || <div id="temp">N/A</div>}
      </div>
    </div>
  );
}
