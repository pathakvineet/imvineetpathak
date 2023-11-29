import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import "../assets/css/findme.css";

import "../assets/css/findme.css";

export function Insta({ name, info, url }) {
  return (
    <div
      className="find-me-card"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <div>
        <RiInstagramFill />
        <h4>{name}</h4>
      </div>
      <p>{info}</p>
    </div>
  );
}

export function YT({ name, info }) {
  return (
    <div className="find-me-card">
      <div>
        <RiYoutubeFill />
        <h4>{name}</h4>
      </div>
      <p>{info}</p>
    </div>
  );
}

export default function FindMe() {
  return (
    <div className="find-me-container">
      <h3>Find Me</h3>
      <div className="find-me-showcase">
        <Insta
          name="absolute_bananas"
          url="https://www.instagram.com/absolute_bananas/"
          info="Personal account."
        />
        <Insta
          name="map.unwrap"
          url="https://www.instagram.com/map.unwrap/"
          info="Exploring India frame by frame"
        />
        <YT
          name="map.unwrap"
          url="https://www.youtube.com/channel/UCyXrofghFF2NGBegsxceLvA"
          info="Exploring India scene by scene"
        />
        <Insta
          name="tess.pass.arts"
          url="https://www.instagram.com/tess.pass.arts/"
          info="Embarking on a new passion for drawing"
        />
        <Insta
          name="the.silly.hamster"
          url="https://www.instagram.com/the.silly.hamster/"
          info="News in MEME format"
        />
        <Insta
          name="pixel.dumpyard"
          url="https://www.instagram.com/pixel.dumpyard/"
          info="clicks that deserve a second glance"
        />
      </div>
    </div>
  );
}
