import React from "react";
import "../assets/css/hobbies.css";

const HobbyCard = ({ hobby, info }) => {
  return (
    <div className="hobby-card">
      <p>{hobby}</p>
      <p>{info}</p>
    </div>
  );
};

export default function HobbiesAndLikes() {
  return (
    <div className="hobbies-container">
      <h3>Hobbies and Likes</h3>
      <HobbyCard hobby="Cooking" info="kind of" />
      <HobbyCard hobby="Gardening" info="started late '23" />
      <HobbyCard hobby="Drawing" info="started late '23" />
      <HobbyCard hobby="Listning to Music" info="Mellow background volume" />
      <HobbyCard hobby="Exploring places" info="Just not traveling, explore" />
      <HobbyCard hobby="Reading Books" info="Personal development only" />
    </div>
  );
}
