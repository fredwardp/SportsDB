import "./Home.css";
import { useContext, useEffect } from "react";
import countries from "../../assets/Data/Countries";
import sports from "../../assets/Data/AllSports";
import HomeFilterDropDown from "../../componenten/HomeFilterDropDown/HomeFilterDropDown";
import {
  SportPopUpContext,
  CountryPopUpContext,
  AllLeaguesContext,
} from "../../context/context";
import HomeFilterPopUp from "../../componenten/HomeFilterPopUp/HomeFilterPopUp";
import Header from "../../componenten/Header/Header";
import Filter from "../../componenten/Filter/Filter";
import allLeagues from "../../assets/Data/AllLeagues";
import CustomScrollBar from "../../componenten/CustomScrollBar/CustomScrollBar";

const Home = () => {
  const { countryPopUp } = useContext(CountryPopUpContext);
  const { sportPopUp } = useContext(SportPopUpContext);
  const { leagues, setLeagues } = useContext(AllLeaguesContext);

  countryPopUp
    ? useEffect(() => {
        fetch(
          `https://www.thesportsdb.com/api/v1/json/60130162/search_all_leagues.php?c=${countryPopUp}`
        )
          .then((res) => res.json())
          .then((leaguesData) => setLeagues(leaguesData))
          .catch((err) => console.log("noch keine Daten", err));
      }, [countryPopUp])
    : "";
  return (
    <>
      <Header />
      <section className="container filter_section">
        <div className="filter_spcbtw">
          <div className="filter_popup_wrapper">
            {countryPopUp ? <HomeFilterPopUp func="c" /> : ""}
            {sportPopUp ? <HomeFilterPopUp func="a" /> : ""}
          </div>
          <div className="filter_button_wrapper">
            <HomeFilterDropDown
              func="c"
              data={countries}
              name="All Countries"
            />
            <HomeFilterDropDown func="s" data={sports} name="All Sports" />
          </div>
        </div>
        <div className="container_output_wrapper">
          {countryPopUp ? (
            leagues ? (
              <Filter data={leagues} />
            ) : (
              ""
            )
          ) : (
            <Filter data={allLeagues} />
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
