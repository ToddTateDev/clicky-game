import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Character from "./components/Character/Character";
import characters from "../src/characters.json";
import './App.css';

class App extends Component {
  state = {
    characters
  };



  render() {

    return (
      <>
      <Navbar>
      </Navbar>
      <Header>
      </Header>
      <Wrapper>
        {this.state.characters.map(character => (
          <Character 
          key={character.id}
          image={character.image}
          />
          ))}
      </Wrapper>
    </>
  )
}
}

export default App;
