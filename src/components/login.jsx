import React from "react";

export let Login = (props) => {
  const checkCredentials = (e) => {
    e.preventDefault();

    if (props.userName === "admin" && props.password === "admin") {
      props.setisLoggedIn(true);
    } else {
      props.setisLoggedIn(false);
    }
    props.setText("Wrong credentials");
    console.log(props.isloggedIn);
  };

  return (
    <div>
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
    </div>
  );
};
