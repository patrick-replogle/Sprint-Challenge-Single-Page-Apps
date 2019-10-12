import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard.js";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/ ")
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.log(error, "error");
      });
  }, []);

  return (
    <div className="locations-container">
      {locations.map((loc, index) => {
        return <LocationCard loc={loc} key={index} />;
      })}
    </div>
  );
}
