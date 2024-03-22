import {
  LoadingContext,
  AllCountriesContext,
  AllLeaguesContext,
  AllPlayersContext,
  AllTeamsContext,
} from "../../context/context";
import { useEffect, useContext } from "react";

const FetchData = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  const { leagues, setLeagues } = useContext(AllLeaguesContext);
  const { teams, setTeams } = useContext(AllTeamsContext);
  const { players, setPlayers } = useContext(AllPlayersContext);

  //   useEffect(() => {
  //     fetch(
  //       `https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=${countries.countries.name_en}`
  //     )
  //       .then((res) => res.json())
  //       .then((leaguesData) => setLeagues(leaguesData))
  //       .catch((err) => console.log("noch keine Daten", err));
  //   }, []);


  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=`)
    .then((res) => res.json())
    .then((teamsData) => setTeams(teamsData.teams))
    .catch((err) => console.log("Noch keine Daten", err));
  }, []);



  //   useEffect(() => {
  //     fetch(`www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${p}`)
  //       .then((res) => res.json())
  //       .then((playerData) => setPlayers(playerData))
  //       .catch((err) => console.log("noch keine Daten", err));
  //   }, []);

  return <></>;
};

export default FetchData;
