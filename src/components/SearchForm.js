import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard.js";

export default function SearchForm() {
  const [character, setCharacter] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("rick");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log(error, "error");
      });
  }, [name]);

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setName(input);
  };

  return (
    <section className="search-form">
      <p>
        Want to only display a specific character from Rick and Morty? Just type
        the character's first name into the box below and click submit!
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          onChange={handleChange}
          id="name"
          name="name"
          value={input}
          placeholder="rick"
        />
        <Button type="submit">Submit</Button>
      </form>
      {character.map((char, index) => {
        return <CharacterCard char={char} key={index} />;
      })}
    </section>
  );
}

const Button = styled.button`
  border-radius: 4px;
  background: dodgerblue;
  color: white;
  padding: 4px 30px;
  margin: 0 10px;

  &:hover {
    background: white;
    color: dodgerblue;
  }
`;
