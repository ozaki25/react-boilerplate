import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name="ozaki25" />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
