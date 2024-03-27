import "./DetailPlayer.css";
import { useContext, useEffect, useState } from "react";
import { AllPlayersContext } from "../../context/context";
import { useParams } from "react-router-dom";

const DetailPlayer = () => {
  const params = useParams();
  const { id } = params;

  const { players, setPlayers } = useContext(AllPlayersContext);
  const [playerDetail, setPlayerDetail] = useState({});
  const [imgPopup, setImgPopUp] = useState();

  useEffect(() => {
    if (id) {
      fetch(
        `https://www.thesportsdb.com/api/v1/json/60130162/searchplayers.php?p=${id}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((playersData) => {
          if (playersData && playersData.player) {
            setPlayers(playersData.player);
          } else {
            console.log("Keine Spieler gefunden");
          }
        })
        .catch((err) => {
          console.log("Fehler beim Abrufen der Daten:", err);
        });
    }
  }, [id, setPlayers]);

  return (
    <>
      <div className={imgPopup ? "img_popup" : ""}>
        <div onClick={() => setImgPopUp("")} className="img_popup_close">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ stroke: "var(--white)" }}
          >
            <path
              d="M2 2L14 14"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M14 2L2 14"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <img
          onClick={() => setImgPopUp("")}
          className={imgPopup ? "show_img" : "no_show"}
          src={imgPopup}
          alt=""
        />
      </div>
      <section className="container container-padding">
        {players && players.length > 0 ? (
          <>
            <h1 className="player-name ">{players[0]?.strPlayer}</h1>
            <div className="header-flex player-flex">
              <div className="player-infos">
                {players[0]?.strNationality && (
                  <>
                    <p className="detail-headline montserrat">
                      {players[0]?.strNationality}
                    </p>
                    <p className="detail-text opensans">Nationality</p>
                  </>
                )}
                {players[0]?.strGender && (
                  <>
                    <p className="detail-headline montserrat">
                      {players[0]?.strGender}
                    </p>
                    <p className="detail-text opensans">Gender</p>
                  </>
                )}
                {players[0]?.strBirthLocation && (
                  <>
                    <p className="detail-headline montserrat">
                      {players[0]?.strBirthLocation}
                    </p>
                    <p className="detail-text opensans">Birth Location</p>
                  </>
                )}
                {players[0]?.dateBorn && (
                  <>
                    <p className="detail-headline montserrat">
                      {players[0]?.dateBorn}
                    </p>
                    <p className="detail-text opensans">Date of Birth</p>
                  </>
                )}
                {players[0]?.strSport && (
                  <>
                    <p className="detail-headline montserrat">
                      {players[0]?.strSport}
                    </p>
                    <p className="detail-text opensans">Sport</p>
                  </>
                )}
                {players[0]?.strPosition && (
                  <>
                    <p className="detail-headline montserrat">
                      {players[0]?.strPosition}
                    </p>
                    <p className="detail-text opensans">Position</p>
                  </>
                )}
                {players[0]?.strStatus && (
                  <>
                    <p className="detail-headline montserrat">
                      {players[0]?.strStatus}
                    </p>
                    <p className="detail-text opensans">Status</p>
                  </>
                )}
                {players[0]?.strHeight && (
                  <>
                    <p className="detail-headline montserrat">
                      {players[0]?.strHeight}
                    </p>
                    <p className="detail-text opensans">Height</p>
                  </>
                )}
                {players[0]?.strWeight && (
                  <>
                    <p className="detail-headline montserrat">
                      {players[0]?.strWeight}
                    </p>
                    <p className="detail-text opensans">Weight</p>
                  </>
                )}
              </div>
              <div className="player-img">
                <img src={players[0]?.strThumb} alt="Image" />
                {players[0]?.strDescriptionEN && (
                  <>
                    <h2 className="player-desc opensans">PLAYER DESCRIPTION</h2>
                    <p className="player-details montserrat">
                      {players[0]?.strDescriptionEN}
                    </p>
                  </>
                )}
                <div className="player-socials opensans">
                  {players[0]?.strWebsite && (
                    <a
                      className="opensans"
                      target="_blank"
                      href={"https://" + players[0]?.strWebsite}
                    >
                      WEBSITE
                    </a>
                  )}
                  {players[0]?.strFacebook && (
                    <a
                      className="opensans"
                      target="_blank"
                      href={"https://" + players[0]?.strFacebook}
                    >
                      FACEBOOK
                    </a>
                  )}
                  {players[0]?.strTwitter && (
                    <a
                      className="opensans"
                      target="_blank"
                      href={"https://" + players[0]?.strTwitter}
                    >
                      TWITTER
                    </a>
                  )}
                  {players[0]?.strInstagram && (
                    <a
                      className="opensans"
                      target="_blank"
                      href={"https://" + players[0]?.strInstagram}
                    >
                      INSTAGRAM
                    </a>
                  )}
                  {players[0]?.strYoutube && (
                    <a
                      className="opensans"
                      target="_blank"
                      href={"https://" + players[0]?.strYoutube}
                    >
                      YOUTUBE
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="fanarts">
              {players[0]?.strFanart1 && (
                <img
                  onClick={() => setImgPopUp(players[0]?.strFanart1)}
                  src={players[0]?.strFanart1}
                  alt="Player Thumbnail"
                />
              )}
              {players[0]?.strFanart2 && (
                <img
                  onClick={() => setImgPopUp(players[0]?.strFanart2)}
                  src={players[0]?.strFanart2}
                  alt="Player Thumbnail"
                />
              )}
              {players[0]?.strFanart3 && (
                <img
                  onClick={() => setImgPopUp(players[0]?.strFanart3)}
                  src={players[0]?.strFanart3}
                  alt="Player Thumbnail"
                />
              )}
              {players[0]?.strFanart4 && (
                <img
                  onClick={() => setImgPopUp(players[0]?.strFanart4)}
                  src={players[0]?.strFanart4}
                  alt="Player Thumbnail"
                />
              )}
            </div>
          </>
        ) : (
          <p>Keine Spieler gefunden</p>
        )}
      </section>
    </>
  );
};

export default DetailPlayer;
