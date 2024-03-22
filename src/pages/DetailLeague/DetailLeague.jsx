import { useState } from "react";
import "./DetailLeague.css";
import { NavLink, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import "@fontsource/montserrat/600.css";
import countries from "../../assets/Data/Countries";
// import Footer from "../../componenten/Footer/Footer";

const DetailLeague = () => {
    const [myLeague, setMyLeague] = useState();

    const { id } = useParams();

    // erstelle string der Länder aus countries
    const countryNames = countries.map((country) => country.name_en).join(", ");
    // erstelle array aus countryNames
    const countryNamesArray = countryNames.split(", ");

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League")
            .then((res) => res.json())
            .then((leagueData) => setMyLeague(leagueData))
            .catch((error) => console.log("An error has occured", error));
    }, []);

    // console.log(myLeague);
    return (
        <>
            <div className="container">
                <header className="detailLeagueHeader">
                    <div className="headerContainerLeft">
                        <img src="\img\detail-league\soccerHero.jpg" alt="soccer playground" className="detailLeagueHeaderImage" />
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
