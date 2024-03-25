import "./Filter.css";
import { useEffect, useState, useContext } from "react";
import countries from "../../assets/Data/Countries";
import allLeagues from "../../assets/Data/AllLeagues";
import { Link } from "react-router-dom";
import {
  CountryPopUpContext,
  SportPopUpContext,
  AllLeaguesContext,
} from "../../context/context";

const Filter = ({ data }) => {
  const { countryPopUp, setCountryPopUp } = useContext(CountryPopUpContext);
  const { sportPopUp, setSportPopUp } = useContext(SportPopUpContext);
  const [countryData, setCountryData] = useState();
  const { leagues, setLeagues } = useContext(AllLeaguesContext);

  // sortieren aller Liegen in dem Array nach dem Anfangsbuchstaben der Ligen
  let sortedLeagues = "";

  data === leagues
    ? (sortedLeagues = data.countries.sort((a, b) => {
        return a.strLeague.localeCompare(b.strLeague);
      }))
    : (sortedLeagues = data.sort((a, b) => {
        return a.strLeague.localeCompare(b.strLeague);
      }));

  // erstellen eines leeren Arrays, um im Anschluss mit er filter methode über alle Liegen zu filtern und zu vergleichen, ob die Sportart mit der Liga mit der ausgewählten Sportart übereinstimmt und wenn ja wird sie in das Array sortedSport gepusht

  let sortedSport = [];

  if (sportPopUp) {
    sortedSport = sortedLeagues.filter((item) => item.strSport === sportPopUp);
  } else {
    sortedSport = [...sortedLeagues]; // Copying all elements
  }
  console.log(sortedSport);

  // erstellen eines leeren Objects in dem später alle Liegen mit dem gleichen Anfangsbuchstaben zusammen in ein Objekt sollen
  const groupedLeagues = {};

  // Die Liegen werden anhand ihres Anfangsbuchstabens in jeweils ein Objekt gesteckt, welches nach dem Anfangsbuchstaben benannt ist
  sortedSport.forEach((league) => {
    const firstLetter = league.strLeague.charAt(0);
    if (!groupedLeagues[firstLetter]) {
      groupedLeagues[firstLetter] = [];
    }
    groupedLeagues[firstLetter].push(league);
  });

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
