import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  LoadingContext,
  AllCountriesContext,
  AllLeaguesContext,
  AllPlayersContext,
  AllTeamsContext,
  CountryPopUpContext,
} from "../../context/context";

const FetchData = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  const { teams, setTeams } = useContext(AllTeamsContext);
  const { players, setPlayers } = useContext(AllPlayersContext);
  const { countryPopUp, setCountryPopUp } = useContext(CountryPopUpContext);

  const { teamName } = useParams();
  console.log("Team Name aus der URL:", teamName);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/60130162/searchteams.php?t=${teamName}`)
      .then((res) => res.json())
      .then((teamsData) => {
        if (teamsData.teams) {
          setTeams(teamsData.teams);
        } else {
          console.log("Keine Teams gefunden");
        }
      })
      .catch((err) => console.log("Noch keine Daten", err));
  }, [teamName, setTeams]);

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/searchplayers.php?t=${teamName}&p={Playername}`
    )
      .then((res) => res.json())
      .then((playerData) => {
        if (playerData && playerData.players) {
          setPlayers(playerData.players);
        } else {
          console.log("Keine Spieler gefunden");
        }
      })
      .catch((err) => console.log("Noch keine Daten", err));
  }, [teamName, setPlayers]);

  return <></>;
};

export default FetchData;
