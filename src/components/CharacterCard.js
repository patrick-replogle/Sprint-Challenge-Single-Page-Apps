import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  alight-items: center;
  justify-content: center;
  width: 40%;
  background-color: rgba(114, 121, 34, 0.9);
  color: #5eb7b3;
  margin: 20px 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
`;

const Img = styled.img`
  width: 100%;
`;

export default function CharacterCard({ char }) {
  return (
    <div className="character-card-container">
      <Card>
        <Img src={char.image} alt="characterImage" />
        <h1>Name: {char.name}</h1>
        <p>Gender: {char.gender}</p>
        <p>Origin: {char.origin.name}</p>
        <p>Species: {char.species}</p>
        <p>Featured in{char.episode.length} episodes</p>
        <p>Status: {char.status}</p>
      </Card>
    </div>
  );
}
