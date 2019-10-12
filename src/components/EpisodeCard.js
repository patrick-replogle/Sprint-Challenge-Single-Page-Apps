import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  alight-items: center;
  justify-content: center;
  width: 50%;
  background-color: rgba(114, 121, 34, 0.9);
  color: #5eb7b3;
  margin: 20px 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
`;

const EpisodeCard = ({ episode }) => {
  return (
    <Card>
      <h1>Name: {episode.name}</h1>
      <p>Air Date: {episode.air_date}</p>
      <p>Episode Number: {episode.episode}</p>
      <p>{episode.characters.length} characters featured in episode</p>
    </Card>
  );
};

export default EpisodeCard;
