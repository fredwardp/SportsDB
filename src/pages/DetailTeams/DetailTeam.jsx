import "./DetailTeam.css";
import { useContext, useEffect, useState } from "react";
import { AllTeamsContext } from "../../context/context";
import { useParams } from "react-router-dom";

const DetailTeam = () => {
  const { teamName } = useParams();
  console.log("Team Name aus der URL:", teamName);
  const { teams } = useContext(AllTeamsContext);
  const [teamDetail, setTeamDetail] = useState({});

  useEffect(() => {
      console.log(teams);
      if (Array.isArray(teams) && teams.length > 0) {
          const selectedTeam = teams.find((team) => team.strTeam === teamName);
          if (selectedTeam) {
              setTeamDetail(selectedTeam);
              console.log("Team Detail:", selectedTeam);
          } else {
              console.log("Kein Team gefunden.");
          }
      }
  }, [teamName, teams]);

    return (
        <section className="container container-padding">
            <h1 className="team-name montserrat">{teamDetail.strTeam}</h1>
            <div className="header-flex">
                <div className="team-infos">
                    <p className="detail-headline montserrat">{teamDetail.strCountry}</p>
                    <p className="detail-text opensans">Country</p>
                    <p className="detail-headline montserrat">{teamDetail.strStadiumLocation}</p>
                    <p className="detail-text opensans">Location</p>
                    <p className="detail-headline montserrat">{teamDetail.intFormedYear}</p>
                    <p className="detail-text opensans">Established</p>
                    <p className="detail-headline montserrat">{teamDetail.strSport}</p>
                    <p className="detail-text opensans">Sport</p>
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
                    <p className="detail-comp-text">{teamDetail.strLeague}</p> <br />
                    <p className="detail-comp-text">{teamDetail.strLeague2}</p> <br />
                    <p className="detail-comp-text">{teamDetail.strLeague3}</p> <br />
                    <p className="detail-comp-text">{teamDetail.strLeague4}</p> <br />
                    <p className="detail-comp-text">{teamDetail.strLeague5}</p> <br />
                </div>
            </div>
            <div className="desc">
                <div>
                    <h2 className="desc-title montserrat">DESCRIPTION</h2>
                </div>
                <div className="desc-text">
                    <p className="opensans">{teamDetail.strDescriptionEN}</p>
                </div>
            </div>
            <div className="logo-container">
                <img className="team-logo" src={teamDetail.strTeamBadge} alt="CLUB LOGO" />
            </div>
            <h3 className="stadiumtitle opensans">STADIUM</h3>
            <section className="bottompage">
                <div className="stadium opensans">
                    <p>{teamDetail.strStadiumDescription}</p>
                </div>
                <div className="info1 opensans">
                    <p className="info1-title">{teamDetail.strStadium}</p>
                    <p className="info1-info">Home</p>
                    <p className="info1-title">{teamDetail.intStadiumCapacity}</p>
                    <p className="info1-info">Capacity</p>
                </div>
            </section>
            <div className="socials opensans">
                <a className="opensans" href={teamDetail.strWebsite}>
                    WEBSITE
                </a>
                <a className="opensans" href={teamDetail.strFacebook}>
                    FACEBOOK
                </a>
                <a className="opensans" href={teamDetail.strTwitter}>
                    TWITTER
                </a>
                <a className="opensans" href={teamDetail.strInstagram}>
                    INSTAGRAM
                </a>
                <a className="opensans" href={teamDetail.strYoutube}>
                    YOUTUBE
                </a>
            </div>
        </section>
    );
};

export default DetailTeam;
