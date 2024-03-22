import "./Filter.css";
import { useEffect, useState } from "react";
import countries from "../../assets/Data/Countries";
import allLeagues from "../../assets/Data/AllLeagues";
import { Link } from "react-router-dom";

const Filter = () => {
  // sortieren aller Liegen in dem Array nach dem Anfangsbuchstaben der Ligen
  const sortedLeagues = allLeagues.slice().sort((a, b) => {
    return a.strLeague.localeCompare(b.strLeague);
  });

  // erstellen eines leeren Objects in dem später alle Liegen mit dem gleichen Anfangsbuchstaben zusammen in ein Objekt sollen
  const groupedLeagues = {};

  // Die Liegen werden anhand ihres Anfangsbuchstabens in jeweils ein Objekt gesteckt, welches nach dem Anfangsbuchstaben benannt ist
  sortedLeagues.forEach((league) => {
    const firstLetter = league.strLeague.charAt(0);
    if (!groupedLeagues[firstLetter]) {
      groupedLeagues[firstLetter] = [];
    }
    groupedLeagues[firstLetter].push(league);
  });

  //   console.log(groupedLeagues);

  // ich mappe über jeden Key des Objekts (A-Z) und darin nochmal über jeden Index um je einen Div mit dem Übergeordneten Buchstaben zu haben (A-Z). In jeden dieser Div's werden weitere Div's eingefügt, welche die Daten zu je einer SportLiga beinhalten

  const leagueDivs = Object.keys(groupedLeagues).map((letter) => {
    if (letter !== "_" && letter !== "e") {
      return (
        <div className="letter_div" key={letter}>
          <h2>{letter}</h2>
          <div className="letter_wrapper">
            {groupedLeagues[letter].map((league) => (
              <Link
                key={league.idLeague}
                to={`/detailleague/${league.strLeague}`}
              >
                <div>
                  <p className="filter_league">{league.strLeague}</p>
                  <p className="filter_sport">{league.strSport}</p>
                  {/* Add more properties as needed */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  });

  return <div>{leagueDivs}</div>;
};

export default Filter;
