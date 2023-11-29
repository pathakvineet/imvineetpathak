import React from "react";
import "../assets/css/work.css";
const years = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];

let tempArray = [...years];
const reversedYears = tempArray.reverse();

const WorkInProgress = [
  { name: "Ten20 Infomedia", color: "#FE6F5E", start: "2020", end: "2023" },
  { name: "Airtel", color: "#FFBF00", start: "2015", end: "2016" },
  { name: "PCE", color: "#EFDECD", start: "2017", end: "2018" },
  { name: "Map Unwrap", color: "#03C03C", start: "2020", end: "2023" },
  { name: "Bots n' Brains", color: "#8A2BE2", start: "2019", end: "2020" },
  { name: "Ping Swing", color: "#00B7EB", start: "2018", end: "2019" },
  { name: "Ping Swing 1", color: "#CD7F32", start: "2018", end: "2019" },
  { name: "Ping Swing 2", color: "#A91101", start: "2018", end: "2019" },
];

function WorkTimeline(startYear, endYear, color) {
  let start = (1 + years.indexOf(startYear)) * 100;
  let end = (1 + years.indexOf(endYear)) * 100;
  let gap = end - start;
  console.log(
    startYear,
    endYear,
    // years.indexOf(startYear),
    // years.indexOf(endYear),
    start,
    end,
    gap
  );
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ width: "10px", height: gap + "px", backgroundColor: color }}
      ></div>
      <div style={{ width: "10px", height: start + "px" }}></div>
    </div>
  );
}

export default function Work() {
  return (
    <div className="work-container">
      <h3>Work</h3>
      <div style={{ width: "90%", display: "flex" }}>
        <div style={{ border: "1px solid black" }}>
          {reversedYears.map((item) => (
            <div
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "flex-end",
                // border: "1px solid black",
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {WorkInProgress.map((item, index) => {
            return WorkTimeline(
              WorkInProgress[index].start,
              WorkInProgress[index].end,
              WorkInProgress[index].color
            );
          })}
        </div>
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {WorkInProgress.map((item) => (
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
                  backgroundColor: item.color,
                }}
              ></div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
