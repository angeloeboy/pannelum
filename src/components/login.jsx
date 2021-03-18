import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  .login {
    width: 40%;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      font-size: 3rem;
      margin-top: 0px;
      text-align: center;
    }
    input {
      display: block;
      padding: 10px 25px;
      width: 100%;
      box-sizing: border-box;
      background-color: transparent;
      border: 1px solid black;
      outline: none;
      margin-top: 10px;
      font-size: 1.5rem;
    }

    button {
      background-color: transparent;
      padding: 5px 10px;
      border: 1px solid black;
      outline: none;
      margin-top: 10px;
      font-size: 1.5rem;
      width: 200px;
      margin: 10px auto;
      display: block;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;

export let Login = (props) => {
  const [text, setText] = useState("");

  const checkCredentials = (e) => {
    e.preventDefault();

    if (props.userName === "admin" && props.password === "admin") {
      props.setisLoggedIn(true);
    } else {
      props.setisLoggedIn(false);
    }
    setText("Wrong credentials");
    console.log(props.isloggedIn);
  };

  return (
    <Div>
      <div className="login">
        <h1>Login </h1>
        <form onSubmit={checkCredentials}>
          <input
            type="text"
            onChange={props.handleUserNameChange}
            value={props.userName}
          />
          <input
            type="password"
            onChange={props.handlePasswordChange}
            value={props.password}
          />
          <button>Login</button>
        </form>
        <p>{text}</p>
      </div>
    </Div>
  );
};
