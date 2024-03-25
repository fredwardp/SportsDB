import {
  LoadingContext,
  AllCountriesContext,
  AllLeaguesContext,
  AllPlayersContext,
  AllTeamsContext,
  CountryPopUpContext,
} from "../../context/context";
import { useEffect, useContext } from "react";

const FetchData = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  const { teams, setTeams } = useContext(AllTeamsContext);
  const { players, setPlayers } = useContext(AllPlayersContext);
  const { countryPopUp, setCountryPopUp } = useContext(CountryPopUpContext);

  useEffect(() => {
    const { teamName } = useParams();
    console.log("Team Name aus der URL:", teamName);

    fetch(
      `https://www.thesportsdb.com/api/v1/json/60130162/searchteams.php?t=${teamName}`
    )
      .then((res) => res.json())
      .then((teamsData) => {
        if (teamsData.teams) {
          setTeams(teamsData.teams);
        } else {
          console.log("Keine Teams gefunden");
        }
      })
      .catch((err) => console.log("Noch keine Daten", err));
  }, []);

  // useEffect(() => {
  //   fetch(
  //     `www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerData.players}`
  //   )
  //     .then((res) => res.json())
  //     .then((playerData) => setPlayers(playerData))
  //     .catch((err) => console.log("noch keine Daten", err));
  // }, []);

  return <></>;
};

export default FetchData;
