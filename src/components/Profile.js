import React, { useEffect, useState } from "react";
import axios from "../axios";
import Card from "./UI/Card";

function Profile() {
  const [profile, setprofile] = useState("");
  useEffect(() => {
    const Btoken = localStorage.getItem("isLoggedIn");
    async function fetchData() {
      try {
        const response = await axios.get("/users/me", {
          headers: {
            Authorization: `Bearer ${Btoken}`,
          },
        });
        setprofile(response.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchData();
  }, []);
  return (
    <Card>
      <div>
        <img
          src=" https://cdni.iconscout.com/illustration/premium/thumb/payment-system-at-hotel-reception-on-background-2645801-2218261.png"
          alt="reception"
        />
      </div>
      <div className="new-expense__controls">
        <h4 className="header">
          <img
            src="https://www.adomasbaltagalvis.com/wp-content/uploads/2014/10/Creative-example-of-continuous-cover-photo-and-profile-picture-design-for-Facebook-timeline.png"
            alt="breaking bad"
          ></img>
        </h4>
        <h4>
          <span>Username </span> : {profile.username}
        </h4>
        <h4>
          {" "}
          <span>Name </span> : {profile.name}
        </h4>
        <h4>
          <span>Email </span> : {profile.email}
        </h4>
        <h4>
          <span>Age </span> : {profile.age}
        </h4>
        <h4>
          <span>Address</span> : {profile.address}
        </h4>
        <h4>
          <span>Phone No </span> : {profile.phone}
        </h4>
      </div>
    </Card>
  );
}

export default Profile;
