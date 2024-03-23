import "./DetailLeague.css";
import { NavLink, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "@fontsource/montserrat/600.css";
import countries from "../../assets/Data/Countries";
import sports from "../../assets/Data/AllSports";
import ScrollUp from "../../componenten/ScrollUp/ScrollUp";

const DetailLeague = () => {
    const [myLeague, setMyLeague] = useState();
    const [myTeamDetail, setMyTeamDetail] = useState();

    const { id } = useParams();

    const myAPIKey = "60130162";
    // erstelle string der Länder aus countries
    const countryNames = countries.map((country) => country.name_en).join(", ");
    // erstelle array aus countryNames
    const countryNamesArray = countryNames.split(", ");
    let x = "English%20Premier%20League";
    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League")
            .then((res) => res.json())
            .then((leagueData) => setMyLeague(leagueData))
            .catch((error) => console.log("An error has occured", error));
    }, []);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/${myAPIKey}/lookup_all_players.php?id=133601`)
            .then((res) => res.json())
            .then((data) => setMyTeamDetail(data))
            .catch((error) => console.log("An error has occured", error));
    }, []);

    // console.log(myLeague);
    // console.log(myTeamDetail);
    // // erstelle kopie von sports array
    // const mySportsArray = [...sports];
    // // entferne die leerzeichen
    // const newMySportsArray = mySportsArray.map((e) => {
    //     return e.data.replace(" ", "").toLowerCase();
    // });

    myTeamDetail ? console.log(myTeamDetail) : console.log("No Data found");

    let detailLeagueImageSource = "";
    let sportVar = "";
    myLeague ? (sportVar = myLeague.teams[0].strSport.toLowerCase()) : "";

    sportVar ? (detailLeagueImageSource = sportVar) : (detailLeagueImageSource = "sports");

    return (
        <>
            <div className="container montserrat">
                <header className="detailLeagueHeader">
                    <div className="headerContainerLeft">
                        <img src={`/img/detail-league/${detailLeagueImageSource}.jpg`} alt="" className="detailLeagueHeaderImage" />
                    </div>
                    <div className="detailLeagueHeaderContainerRight">
                        <div className="detailLeagueHeadingContainer">
                            <h1 className="detailLeagueHeading">
                                English <br />
                                Premier <br /> League
                            </h1>
                            <p>soccer</p>
                        </div>
                    </div>
                </header>
                {myLeague ? (
                    <div className="">
                        {myLeague.teams.map((element) => {
                            //hier wird das Land aus element.strStadiumLocation entfernt
                            let stadiumLocation = element.strStadiumLocation;
                            countryNamesArray.forEach((country) => {
                                if (stadiumLocation.includes(country)) {
                                    stadiumLocation = stadiumLocation.replace(country, "");
                                }
                            });
                            return (
                                <div className="detailLeagueInnerOutput" key={element.idTeam}>
                                    <Link className="detailLeagueLink" to={`/detailteams/${element.idTeam}`}>
                                        <p className="detailLeaguePTag1">{element.strTeam}</p>
                                    </Link>
                                    <p className="detailLeaguePTag2">{stadiumLocation}</p>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>no data found</p>
                )}
            </div>
        </>
    );
};

export default DetailLeague;
