import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard.js";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        console.log(response.data.results);
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.log(error, "error");
      });
  }, []);

  return (
    <div className="episodes-container">
      {episodes.map((episode, index) => {
        return <EpisodeCard episode={episode} key={index} />;
      })}
    </div>
  );
};

export default EpisodeList;
