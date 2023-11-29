import React, { useState, useEffect } from "react";
import "../assets/css/music.css";

const SpotifyPreview = ({ uri, size = 400 }) => {
  const [width, setWidth] = useState(size);
  const [height, setHeight] = useState(size);

  useEffect(() => {
    // Update width and height when the component mounts
    setWidth(size);
    setHeight(size);

    // Add event listener to update width and height on window resize
    const handleResize = () => {
      // Update width and height based on your conditions
      // For example, update size on screens smaller than 600px
      if (window.innerWidth < 786) {
        setWidth(300);
        setHeight(160);
      } else {
        // Default size for larger screens
        setWidth(size);
        setHeight(size);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  return (
    <iframe
      title="Spotify Preview"
      src={`https://open.spotify.com/embed/${uri}`}
      width={width}
      height={height}
      allowtransparency="true"
      allow="encrypted-media"
      style={{ border: "none" }}
    />
  );
};

export default function Music() {
  return (
    <div className="music-container">
      <h3>Groove to my beats</h3>
      <div className="spotify-card-shelf">
        <SpotifyPreview uri="playlist/0b4dsa9NGt5r9Gnr6Iss9F?si=uzmpkgPORhKNE-2C7iFJYQ" />
        <SpotifyPreview uri="playlist/4NRuj6clQgEbyeyUlo3iev?si=H3aKbC0oRRi8Gb9rUCNi0w" />
        <SpotifyPreview uri="playlist/0tS6DvLU63wbmMgvt0Sx0R?si=d6r9Ss34SkCdd2IGkMVIuQ" />
        <SpotifyPreview uri="playlist/4bwoXnWUBPVkdyVZtG82L7?si=CX5hYNUTQXicmYaeACI89Q" />
        <SpotifyPreview uri="playlist/0SJtTQMOGHShBiyfo97TIU?si=EBAcK8tsTTOpswrTpeIxhw" />
        <SpotifyPreview uri="playlist/5AUd7NFHcrzFhUUZTcsCXa?si=s-vDMSAfTcCXA0HQS9_V_w" />
        <SpotifyPreview uri="playlist/7x42JjIrmtYDxjIgHF55zt?si=xQJmBINiTuaK4iy3VgIipg" />
        <SpotifyPreview uri="playlist/16lRZvQ3BXgUfRmBHNXa9k?si=5cq76XakSNqL_Fvai6D5EQ" />
        <SpotifyPreview uri="playlist/0LUIgAh4ZDcA3JFRBys7Qw?si=emIa8qWRSjijzO023s-KIQ" />
        <SpotifyPreview uri="playlist/1DLDEGTdJa4uKUPYa6RNDG?si=Q97aSh72TW6hj61Eq9GfpA" />
        <SpotifyPreview uri="playlist/3wg187IJLupAQmA6Haia70?si=xuM-O88EQcmqGVOAjwNAhg" />
      </div>
    </div>
  );
}
