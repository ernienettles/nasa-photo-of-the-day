import React from "react";
import "./App.css";
import ContentContainer from "./components/ContentContainer";


function App() {
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="App-header"> Nasa Picture of the Day</h1>
      </div>
      <ContentContainer />
    </div>
  );
}

export default App;
