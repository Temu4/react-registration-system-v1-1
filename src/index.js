import React from "react";
import ReactDOM from "react-dom";
import RegistrationSystem from "./RegistrationSystem";
import "./styles.css";

class App extends React.Component {
  render() {
    return <RegistrationSystem />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
