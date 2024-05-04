import React from "react";
import "../assets/css/work.css";

const years = [
  "2014",
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

function TodayFormatted() {
  // Get the current date
  const currentDate = new Date();

  // Get the current year
  const currentYear = currentDate.getFullYear();

  // Calculate the day of the year
  const startOfYear = new Date(currentYear, 0, 1);
  const totalDaysInYear = Math.floor((currentDate - startOfYear) / (24 * 60 * 60 * 1000)) + 1;

  // Calculate the percentage of days passed
  const percentageDaysPassed = (totalDaysInYear / 365) * 100;

  // Format the result
  const formattedResult = `${currentYear}.${percentageDaysPassed.toFixed(2)}`;

  return formattedResult;
}

let tempArray = [...years];
const reversedYears = tempArray.reverse();

const WorkInProgress = [
  {
    name: "Ath Telcom",
    color: "#CD7F32",
    start: "2014.50",
    end: "2015.00",
    info: "Cable installation",
  },
  {
    name: "Airtel",
    color: "#FFBF00",
    start: "2015.50",
    end: "2016.00",
    info: "4G, Sales and Marketing",
  },
  {
    name: "PCE",
    color: "#EFDECD",
    start: "2017.50",
    end: "2018.50",
    info: "Electrical Manufacturer",
  },
  {
    name: "Powerect Industries",
    color: "#A91101",
    start: "2016.00",
    end: "2017.25",
    info: "Mid-scale electrical repairs",
  },
  {
    name: "Ping Swing",
    color: "#00B7EB",
    start: "2018.50",
    end: "2019.25",
    info: "Side Project, Connect like-minded people",
  },
  {
    name: "Bots n' Brains",
    color: "#8A2BE2",
    start: "2019.25",
    end: "2020.50",
    info: "MERN stack developer",
  },
  {
    name: "Map Unwrap",
    color: "#03C03C",
    start: "2021.25",
    end: TodayFormatted(),
    info: "Side Project, travel startup",
  },
  {
    name: "Ten20 Infomedia",
    color: "#FE6F5E",
    start: "2020.50",
    end: TodayFormatted(),
    info: "MERN stack developer",
  },
];

function WorkTimeline(from, to, color) {
  let startYear = from.split(".")[0];
  let endYear = to.split(".")[0];
  let startQuarter = from.split(".")[1];
  let endQuarter = to.split(".")[1];
  let start = years.indexOf(startYear) * 100 + parseInt(startQuarter);
  let end = years.indexOf(endYear) * 100 + parseInt(endQuarter);
  let gap = end - start;
  console.log(start, end, gap);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ width: "100%", height: gap + "px", backgroundColor: color }}></div>
      <div style={{ width: "10px", height: start + "px" }}></div>
    </div>
  );
}

export default function ProjectOdyssey() {
  return (
    <div className="work-container">
      <h3>Project Odyssey</h3>
      <div className="work-table">
        <div className="box">
          {reversedYears.map((item) => (
            <div
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className="box"
          style={{
            // border: "1px solid #ebebeb",
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
          className="box workIndex"
          style={
            {
              // border: "1px solid #ebebeb",
            }
          }
        >
          {WorkInProgress.map((item) => (
            <div className="index-container">
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
                  backgroundColor: item.color,
                }}
              ></div>
              <p>{item.name}</p>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
