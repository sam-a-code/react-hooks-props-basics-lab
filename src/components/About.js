import React from "react";
import user from "../data/user"
import Links from "./Links";


function About(user) {
  const userBio = user.bio

  return (
    <div id="about">
      <h2>About Me</h2>
      {userBio ? <p>{user.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
