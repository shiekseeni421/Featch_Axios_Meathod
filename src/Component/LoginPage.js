import React, { Component } from "react";

import "../Style/LoginPageStyles.css";

class LoginPage extends Component {
  state = {
    Name: "",
    EmailEl: "",
    password: "",
    postId: "",
  };

  HandleEmail = (e) => {
    let Value = e.target.value;
    this.setState({ EmailEl: Value });
  };

  HandlePass = (e) => {
    let value = e.target.value;
    this.setState({ password: value });
  };

  HandleName = (e) => {
    let value = e.target.value;
    this.setState({ Name: value });
  };

  HandleLogin = async (e) => {
    e.preventDefault();
    let email = this.state.EmailEl;
    let password = this.state.password;
    let name = this.State.Name;
    console.log(name);

    await fetch("http://restapi.adequateshop.com/api/Tourist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer 4567",
      },
      body: JSON.stringify({
        tourist_name: name,
        tourist_email: email,
        tourist_location: password,
      }),
    })
      .then((result) => {
        console.log(result);
        let data = JSON.parse(result);
        console.log(data);
        this.setState({
          postId: data,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  };

  render() {
    return (
      <div className="Form-Main-Container">
        <form className="form-el">
          <h1>Fetch Method</h1>
          <label htmlFor="User-Name">user Name</label>
          <input
            type="text"
            id="User-Name"
            placeholder="Name"
            onChange={this.HandleName}
          />
          <label htmlFor="User-Email">User Email</label>
          <input
            type="text"
            id="User-Email"
            placeholder="Enter User Email"
            required
            onChange={this.HandleEmail}
          />
          <label htmlFor="UserPass">Password</label>
          <input
            type="password"
            id="UserPass"
            placeholder="Enter Password"
            required
            onChange={this.HandlePass}
          />
          <button className="button" onClick={this.HandleLogin}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
