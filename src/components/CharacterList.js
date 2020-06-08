import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error, "error");
      });
  }, []);

  useEffect(() => {}, [filteredCharacters, searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
    setFilteredCharacters(
      characters.filter(char =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    console.log(searchTerm);
  };

  const myArray = filteredCharacters.length ? filteredCharacters : characters;

  return (
    <div>
      <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
    When properties in the model get updated, so does the UI.
    When UI elements get updated, the changes get propagated back to the model. */}
        <label for="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <section className="character-list">
        {myArray.map((char, index) => {
          return <CharacterCard char={char} key={index} />;
        })}
      </section>
    </div>
  );
}
