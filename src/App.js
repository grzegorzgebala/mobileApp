import React from 'react';
import './App.css';
import { ReactComponent as Background } from "./Background/1_loginPage/background.svg";
import { ReactComponent as StatusBar } from "./Background/0_common/statusBar.svg";

function App() {
  return (
    <div className="container">
      <Background className="background" />
      <StatusBar className="status" />
      <div className="appInfo">
        <div className="topic">YOUR ART MUSEUM</div>
        <div className="desc">151 3rd St San Francisco, CA 94103</div>
      </div>
      <div className="logInFields">
        <input></input>
        <input></input>
        <div className="forgotPass">Forgot your password?</div>
      </div>
      <div className="logInButton">
        <button></button>
        <div className="forgotPass">Don't have an account</div>
      </div>
    </div>
  );
}

export default App;
