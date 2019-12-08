import React from 'react';
import './logIn.css';
import { ReactComponent as Background } from "Background/1_loginPage/background.svg";
import { ReactComponent as StatusBar } from "Background/0_common/statusBar.svg";
import {Link} from 'react-router-dom';

function LogIn() {
    return (
        <div className="container">
            <Background className="background" />
            <StatusBar className="status" />
            <div className="appInfo">
                <div className="topic">YOUR ART MUSEUM</div>
                <div className="desc">151 3rd St San Francisco, CA 94103</div>
            </div>
            <div className="logInFields">
                <input className="email" type="text" name="email" value="Email adress"/>
                <input className="password" type="text" name="password" value="Password" />
                <div className="forgotPass">Forgot your password?</div>
            </div>
            <div className="logInButton">
                <Link to="/home">
                    <button type="buttonLogIn">Log in</button>
                </Link>
                <div className="account">Don't have an account</div>
            </div>
        </div>
    );
}

export default LogIn;
