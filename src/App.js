import React from "react";
import { Route } from "react-router-dom";

import Nav from "./components/Nav.js";
import CharacterList from "./components/CharacterList.js";
import EpisodeList from "./components/EpisodeList.js";
import LocationsList from "./components/LocationsList.js";
import SearchForm from "./components/SearchForm.js";
import WelcomePage from "./components/WelcomePage.js";
import Header from "./components/Header.js";

export default function App() {
  return (
    <main>
      <Header />
      <Nav />
      <Route path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/episodes" component={EpisodeList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/search" component={SearchForm} />
    </main>
  );
}
