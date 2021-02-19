import React from "react";
import "./App.css";
import ContentBoxes from './components/ContentBoxes';
import { NASA_API_KEY } from './apiKeys/key';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <ContentBoxes/>
    </div>
  );
}

export default App;