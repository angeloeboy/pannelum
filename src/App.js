
// import './App.css';
import { Login } from './components/login';
import { useState } from 'react';
import { Lobby } from './components/lobby';

function App() {
  const [isloggedIn, setisLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const checkCredentials = (e) => {
  //   e.preventDefault();
  //   console.log(userName + " " + password);
  //   text = "";

  //   if (userName === "admin" && password === "admin") {
  //     setisLoggedIn(true);
  //   } else {
  //     setisLoggedIn(false);

  //   }

  //   console.log(isloggedIn);
    
  // };

  return (
    <div className="App">
        
        {(isloggedIn) ? (
          <Lobby />
        ): (
          <div> 
            <Login userName={userName} password={password} handleUserNameChange={handleUserNameChange} handlePasswordChange={handlePasswordChange} setisLoggedIn={setisLoggedIn} isloggedIn={isloggedIn}/>
          </div> 


        )}
    </div>
  );
}

export default App;
