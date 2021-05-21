import React, { useRef, useContext } from "react";
import AuthContext from "../store/authContext";
import { useHistory } from "react-router-dom";
import Card from "./UI/Card";
function Login({ token }) {
  const lemailRef = useRef("");
  const lpasswordRef = useRef("");
  const hello = useHistory();
  const ctx = useContext(AuthContext);
  const inSubmitHandler = async (event) => {
    event.preventDefault();
    const validData = {
      email: lemailRef.current.value,
      password: lpasswordRef.current.value,
    };
    try {
      await ctx.onLogin(validData);
      hello.push("/profile");
    } catch (e) {
      console.log(e);
      hello.push("/login");
    }
  };
  return (
    <Card>
      <div>
        <img
          src=" https://cdni.iconscout.com/illustration/premium/thumb/payment-system-at-hotel-reception-on-background-2645801-2218261.png"
          alt="reception"
        />
      </div>
      <form onSubmit={inSubmitHandler} className="new-expense__controls">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={lemailRef}></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={lpasswordRef}></input>
        </div>
        <button>LogIn</button>
      </form>
    </Card>
  );
}

export default Login;
