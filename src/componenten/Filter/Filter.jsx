import { useEffect, useState } from "react";
import countries from "../../assets/Data/Countries";

const Filter = () => {
  const [leagueData, setLeagueData] = useState();
  class allLeaguesBP {
    constructor(league, sport) {
      this.league = league;
      this.sport = sport;
    }
  }

  let emptyArray = [];

  countries.map((item) => {
    useEffect(() => {
      fetch(
        `https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=${item.data}`
      )
        .then((resp) => resp.json())
        .then((countryData) => setLeagueData(countryData))

        .catch((err) => console.log(`no data yet`, err));
    });
  });

  leagueData ? emptyArray.push : "";

  //   console.log(emptyArray);
  return <></>;
};

export default Filter;
