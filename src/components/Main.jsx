import React, { Component } from "react";
import Personalprofile from "./Personalprofile";
import Careersummary from "./Careersummary";

class Main extends Component {
  render() {
    return (
      <main>
        <section>
          <h1>Personal Profile</h1>
          <Personalprofile />
        </section>
        <section>
          <h1>Career Summary</h1>
          <Careersummary />
        </section>
        <section>
          <h1>Education Summary</h1>
        </section>
        <section>
          <h1>Hobbies, Interests and Achievements</h1>
        </section>
        <section>
          <h1>References</h1>
        </section>
      </main>
    );
  }
}

export default Main;
