import React, { Component, useState  } from 'react'
import "./Login.css"
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function LogIn({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(      
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab" >Sign In</label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
          <div class="login-form">
            <form onSubmit={handleSubmit}>
              {/* {
                this.state.error &&
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              } */}
              <div class="sign-in-htm">
                <div class="group">
                  <label for="user" class="label">Username</label>
                  <input id="user" type="text" name="username" class="input" data-test="username" onChange={e => setUserName(e.target.value)} required />
                </div>
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input id="pass" type="password" class="input" data-type="password" data-test="password" onChange={e => setPassword(e.target.value)} required />
                </div>
                <div class="group">
                  <input id="check" type="checkbox" class="check" />
                  <label for="check"><span class="icon"></span> Keep me Signed in</label>
                </div>
                <div class="group">
                  <input type="submit" class="button" value="Sign In"/>
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
            </form>
            <form>
              <div class="sign-up-htm">
                <div class="group">
                  <label for="user" class="label">Username</label>
                  <input id="user" type="text" class="input" required />
                </div>
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input id="pass" type="password" class="input" data-type="password" required />
                </div>
                <div class="group">
                  <label for="pass" class="label">Repeat Password</label>
                  <input id="pass" type="password" class="input" data-type="password" required />
                </div>
                <div class="group">
                  <label for="pass" class="label">Email Address</label>
                  <input id="pass" type="text" class="input" required />
                </div>
                <div class="group">
                  <input type="submit" class="button" value="Sign Up" />
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                  <label for="tab-1">Already Member?</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }

  LogIn.propTypes = {
    setToken: PropTypes.func.isRequired
  }

//export default LogIn
