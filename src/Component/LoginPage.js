import React, { Component } from "react";

import "../Style/LoginPageStyles.css";

class LoginPage extends Component {
  state = {
    NameValue: "",
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
    this.setState({ NameValue: value });
    console.log(this.state.NameValue);
  };

  HandleSubmit = async (e) => {
    e.preventDefault();
    let email = this.state.EmailEl;
    let password = this.state.password;
    let name = this.state.NameValue;
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
      })
      .catch((error) => {
        alert("try another Email");
      });
  };

  render() {
    return (
      <div className="Form-Main-Container">
        <form className="form-el">
          <h1>Fetch Method</h1>
          <label htmlFor="UserValue">user Name</label>
          <input
            type="text"
            id="UserValue"
            placeholder="Name"
            onChange={this.HandleName}
          />
          <label htmlFor="UserEmail">User Email</label>
          <input
            type="text"
            id="UserEmail"
            placeholder="Enter User Email"
            required
            onChange={this.HandleEmail}
          />
          <label htmlFor="User-Pass">Password</label>
          <input
            type="password"
            id="User-Pass"
            placeholder="Enter Password"
            required
            onChange={this.HandlePass}
          />
          <button className="button" onClick={this.HandleSubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
