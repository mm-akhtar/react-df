import React, { useContext } from "react";
import AuthContext from "../store/authContext";
import { useHistory } from "react-router-dom";

function Logout(token) {
  const history = useHistory();
  const ctx = useContext(AuthContext);
  const outHandler = async () => {
    console.log("hello");
    try {
      await ctx.onLogout();
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return <h2 onClick={outHandler}>Logout</h2>;
}

export default Logout;
