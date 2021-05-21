import React, { useRef, useContext } from "react";
import AuthContext from "../store/authContext";
import Card from "./UI/Card";
// import { useHistory } from "react-router-dom";
// import axios from "../axios";

function Signup() {
  const usernameRef = useRef("");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const ageRef = useRef("");
  const addressRef = useRef("");
  const phoneRef = useRef("");
  // useEffect(() => {
  //   const data = {
  //     username: "",
  //     name: "sarfarz",
  //     email: "akhtar7@gmail.com",
  //     password: "Akhtar@9577",
  //   };
  //   axios
  //     .post("/users", data)
  //     .then((res) => console.log(res.data))
  //     .catch((e) => console.log(e.message));
  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
  // const history = useHistory();
  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   const data = {
  //     username: usernameRef.current.value,
  //     name: nameRef.current.value,
  //     email: emailRef.current.value,
  //     password: passwordRef.current.value,
  //     age: ageRef.current.value,
  //     address: addressRef.current.value,
  //     phone: phoneRef.current.value,
  //   };
  //   try {
  //     const response = await axios.post("/users", data);
  //     console.log(response.data);
  //     history.push("/profile");
  //   } catch (e) {
  //     console.log(e.response.data.error);
  //   }
  // };

  // email: "mmakhtar@gmail.com";
  // name: "Akhtar 2103";
  const ctx = useContext(AuthContext);

  const upSubmitHandler = async (event) => {
    event.preventDefault();
    const data = {
      username: usernameRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      age: ageRef.current.value,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
    };
    await ctx.onSignup(data);
    console.log("good");
  };

  return (
    <Card>
      <div>
        <img
          src=" https://cdni.iconscout.com/illustration/premium/thumb/payment-system-at-hotel-reception-on-background-2645801-2218261.png"
          alt="reception"
        />
      </div>
      <form onSubmit={upSubmitHandler} className="new-expense__controls">
        <div>
          <label htmlFor="username">username</label>
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" id="name" ref={nameRef}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef}></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef}></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="password" id="age" ref={ageRef}></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="adress" ref={addressRef}></input>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" ref={phoneRef}></input>
        </div>
        <button>Add Movie</button>
      </form>
    </Card>
  );
}

export default Signup;
