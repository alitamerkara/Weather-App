import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Weather";

function App() {
  const [value, setValue] = useState("");
  const [sonuc, setSonuc] = useState();

  const getApi = async (value) => {
    try {
      const key = "becd7776773dbf46e0f8e512dc400247";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric&lang=tr`
      );
      setSonuc(response.data);
      console.log(sonuc);
    } catch (error) {
      // console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getApi(value);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Hava Durumu</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="inputs"
            type="text"
            placeholder="şehir giriniz..."
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </form>
        {sonuc ? <Weather sonuc={sonuc} /> : null}
      </div>
    </div>
  );
}

export default App;
