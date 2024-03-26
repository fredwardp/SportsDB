import "./DetailLeague.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import countries from "../../assets/Data/Countries";
import AllSportsImage from "../../assets/Data/AllSportsImage";

const DetailLeague = () => {
    const [myLeague, setMyLeague] = useState();
    const [myTeamDetail, setMyTeamDetail] = useState();

    const sportImageSourcePath = AllSportsImage();

    const { id } = useParams();

    const myAPIKey = "60130162";
    // erstelle string der Länder aus countries
    const countryNames = countries.map((country) => country.name_en).join(", ");
    // erstelle array aus countryNames
    const countryNamesArray = countryNames.split(", ");

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${id}`)
            .then((res) => res.json())
            .then((leagueData) => setMyLeague(leagueData))
            .catch((error) => console.log("An error has occured", error));
    }, []);

    // myTeamDetail ? console.log(myTeamDetail) : console.log("No Data found");

    let detailLeagueImageSource = "";
    let sportVar = "";
    if (myLeague && myLeague.teams && myLeague.teams.length > 0) {
        sportVar = myLeague.teams[0].strSport;
        const sportImage = sportImageSourcePath.find((sport) => sport.strSport === sportVar);
        detailLeagueImageSource = sportImage ? sportImage.strSportThumb : "public/img/detail-league/sports.jpg";
    } else {
        console.log("No data found or teams = NULL");
    }

    // console.log(sportImageSourcePath);
    // console.log(detailLeagueImageSource);

    // function removeUnderscores(league) {
    //     return league.replace("_", " ");
    // }

    return (
        <>
            {myLeague ? (
                <div className="container montserrat detailLeagueOuterBox">
                    <header className="detailLeagueHeader">
                        {myLeague.teams !== null ? (
                            <div className="headerContainerLeft">
                                <img src={detailLeagueImageSource} alt="sports image" className="detailLeagueHeaderImage" />
                            </div>
                        ) : (
                            <p></p>
                        )}
                        <div className="detailLeagueHeaderContainerRight">
                            {myLeague.teams !== null ? (
                                <div className="detailLeagueHeadingContainer">
                                    {/* <h1 className="detailLeagueHeading">{myLeague?.teams[0]?.strLeague}</h1> */}
                                    <h1 className="detailLeagueHeading">{myLeague.teams[0] ? myLeague.teams[0].strLeague : myLeague.teams.strLeague}</h1>
                                    {/* <p>{myLeague.teams[0].strSport}</p> */}
                                    <p>{myLeague.teams[0] ? myLeague.teams[0].strSport : myLeague.teams.strSport}</p>
                                </div>
                            ) : (
                                <h2 className="errorMessage">No Data Found</h2>
                            )}
                        </div>
                    </header>
                    {myLeague.teams !== null ? (
                        <div className="">
                            {myLeague.teams.map((element) => {
                                // hier wird das Land aus element.strStadiumLocation entfernt
                                let stadiumLocation = element.strStadiumLocation;
                                {
                                    stadiumLocation ? (
                                        countryNamesArray.forEach((country) => {
                                            if (stadiumLocation.includes(country)) {
                                                stadiumLocation = stadiumLocation.replace(country, "");
                                            }
                                        })
                                    ) : (
                                        <p>"not listed</p>
                                    );
                                }

                                return (
                                    <div className="detailLeagueInnerOutput" key={element.idTeam}>
                                        <Link className="detailLeagueLink" to={`/detailteams/${element.strTeam}`}>
                                            <p className="detailLeaguePTag1">{element.strTeam}</p>
                                        </Link>
                                        <p className="detailLeaguePTag2">{stadiumLocation}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <h2 className="errorMessage"></h2>
                    )}
                </div>
            ) : (
                <h1>No Data found</h1>
            )}
        </>
    );
};

export default DetailLeague;
