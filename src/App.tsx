import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  const handleSubmit = () =>{
    navigate('/product')
  }

  
  return (
    <div>
     <div className="container">
      <div className="login form">
        <header>Login</header>
        <form onSubmit={handleSubmit}>
        <label className="text">
          Username
          <input type="text" name="Username" />
        </label>
       
        <label className="text">
          Password
          <input type="password" name="password" />
        </label>
      
        <input type="submit" className="button" value="Submit" />
      </form>

      
      </div>
     </div>
    </div>
  );
}

export default App;
