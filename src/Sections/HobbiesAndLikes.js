import React from "react";
import "../assets/css/hobbies.css";

const HobbyCard = ({ hobby, info }) => {
  return (
    <div className="hobby-card">
      <h4>{hobby}</h4>
      <p style={{ textAlign: "right" }}>{info}</p>
    </div>
  );
};

export default function HobbiesAndLikes() {
  return (
    <div className="hobbies-container">
      <h3 style={{ marginBottom: "30px" }}>Hobbies and Interests</h3>
      <HobbyCard hobby="Cooking" info="Experimenting with flavors" />
      <HobbyCard hobby="Gardening" info="Cultivating / creating peaceful oasis at home" />
      <HobbyCard hobby="Drawing" info="Unleash creativity and imagination" />
      <HobbyCard
        hobby="Listning to Music"
        info="Finding inspiration in diverse melodies and rhythms"
      />
      <HobbyCard hobby="Exploring places" info="Seeking adventure and discovering hidden gems" />
      <HobbyCard hobby="Reading Books" info="Broadening horizons and gaininig insights" />
    </div>
  );
}
