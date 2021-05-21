import React from "react";
import Card from "./UI/Card";

function Home() {
  return (
    <Card>
      <div className="cover">
        <img
          src="https://i.pinimg.com/originals/db/1c/1a/db1c1ad07b38e8feab26ab31c2961b75.jpg"
          alt="illustration"
        />
        <div className="overlay">
          <h1>WELCOME</h1>
        </div>
      </div>
    </Card>
  );
}

export default Home;
