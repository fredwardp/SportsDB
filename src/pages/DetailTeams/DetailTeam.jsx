import "./DetailTeam.css";
import { useContext, useEffect, useState } from "react";
import { AllTeamsContext } from "../../context/context";
import { useParams } from "react-router-dom";

const DetailTeam = () => {
  const { teamName } = useParams(); 
  console.log("Team Name aus der URL:", teamName);
  
  const { teams, setTeams } = useContext(AllTeamsContext); 
  const [teamDetail, setTeamDetail] = useState({});

  useEffect(() => {
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
  }, [teamName, setTeams]);

  console.log(teams);

  return (
    <section className="container container-padding">
        {teams?.[0]?.strTeam && 
            <>
                <h1 className="team-name montserrat">{teams?.[0]?.strTeam || ''}</h1>
            </>
        }
        <div className="header-flex">
            <div className="team-infos">
                {teams?.[0]?.strCountry && 
                    <>
                        <p className="detail-headline montserrat">{teams?.[0]?.strCountry}</p>
                        <p className="detail-text opensans">Country</p>
                    </>
                }
                {teams?.[0]?.strStadiumLocation && 
                    <>
                        <p className="detail-headline montserrat">{teams?.[0]?.strStadiumLocation}</p>
                        <p className="detail-text opensans">Location</p>
                    </>
                }
                {teams?.[0]?.intFormedYear && 
                    <>
                        <p className="detail-headline montserrat">{teams?.[0]?.intFormedYear}</p>
                        <p className="detail-text opensans">Established</p>
                    </>
                }
                {teams?.[0]?.strSport && 
                    <>
                        <p className="detail-headline montserrat">{teams?.[0]?.strSport}</p>
                        <p className="detail-text opensans">Sport</p>
                    </>
                }
            </div>
            <div className="team-img">
                <img src="https://cdn.discordapp.com/attachments/1176890609542385764/1220380975985332265/w1anwa1588432105_1.png?ex=660ebb5a&is=65fc465a&hm=42d262ae8c46d99b03b2daa3fc9870490157dce9c5604549accbdcb697c89fbd&" alt="Image" />
            </div>
        </div>
        <div className="comp opensans">
            <div>
                <p className="detail-text">COMPETITION</p>
            </div>
            <div>
                {teams?.[0]?.strLeague && 
                    <>
                        <p className="detail-comp-text">{teams?.[0]?.strLeague}</p> <br />
                    </>
                }    
                {teams?.[0]?.strLeague2 && 
                    <>
                        <p className="detail-comp-text">{teams?.[0]?.strLeague2}</p> <br />
                    </>
                } {teams?.[0]?.strLeague3 && 
                    <>
                        <p className="detail-comp-text">{teams?.[0]?.strLeague3}</p> <br />
                    </>
                } {teams?.[0]?.strLeague4 && 
                    <>
                        <p className="detail-comp-text">{teams?.[0]?.strLeague4}</p> <br />
                    </>
                } {teams?.[0]?.strLeague5 && 
                    <>
                        <p className="detail-comp-text">{teams?.[0]?.strLeague5}</p> <br />
                    </>
                } 
            </div>
        </div>
        {teams?.[0]?.strDescriptionEN && 
            <>
                <div className="desc">
                    <div>
                        <h2 className="desc-title montserrat">DESCRIPTION</h2>
                    </div>
                    <div className="desc-text">
                        <p className="opensans">{teams?.[0]?.strDescriptionEN}</p>
                    </div>
                </div>
            </>
        }
        <div className="logo-container">
            <img className="team-logo" src={teams?.[0]?.strTeamBadge} alt="CLUB LOGO" />
        </div>
        <h3 className="stadiumtitle opensans">STADIUM</h3>
        <section className="bottompage">
        {teams?.[0]?.strStadiumDescription && 
            <>
                <div className="stadium opensans">
                    <p>{teams?.[0]?.strStadiumDescription}</p>
                </div>
            </>
        }
            <div className="info1 opensans">
                {teams?.[0]?.strStadium && 
                    <>
                        <p className="info1-title">{teams?.[0]?.strStadium}</p>
                        <p className="info1-info">Home</p>
                    </>
                }
                {teams?.[0]?.intStadiumCapacity && 
                    <>
                        <p className="info1-title">{teams?.[0]?.intStadiumCapacity}</p>
                        <p className="info1-info">Capacity</p>
                    </>
                }
            </div>
        </section>
        <div className="socials opensans">
            {teams?.[0]?.strWebsite &&
            <a className="opensans" target="_blank" href={"https://" + teams?.[0]?.strWebsite}>
                WEBSITE
            </a>
            }
            {teams?.[0]?.strFacebook &&
            <a className="opensans" target="_blank" href={"https://" + teams?.[0]?.strFacebook}>
                FACEBOOK
            </a>
            }
            {teams?.[0]?.strTwitter &&
            <a className="opensans" target="_blank" href={"https://" + teams?.[0]?.strTwitter}>
                TWITTER
            </a>
            }
            {teams?.[0]?.strInstagram &&
            <a className="opensans" target="_blank" href={"https://" + teams?.[0]?.strInstagram}>
                INSTAGRAM
            </a>
            }
            {teams?.[0]?.strYoutube &&
            <a className="opensans" target="_blank" href={"https://" + teams?.[0]?.strYoutube}>
                YOUTUBE
            </a>
            }
        </div>
    </section>
);
};

export default DetailTeam;
