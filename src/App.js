// Homework:
// Create a new repo
// Create a React project inside it
// Create a single page website (possibly your CV)
// Use many components
// Reuse components (think props)
// Submit the repo link to the group

import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
// rememebr type Header press enter on first in list, will auto populate the import tag at the top. then slash, not enter will auto complete wrongly
export default App;
