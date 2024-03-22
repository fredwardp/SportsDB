import "./Home.css";
import { useContext, useState } from "react";
import countries from "../../assets/Data/Countries";
import sports from "../../assets/Data/AllSports";
import HomeFilterDropDown from "../../componenten/HomeFilterDropDown/HomeFilterDropDown";
import { SportPopUpContext, CountryPopUpContext } from "../../context/context";
import HomeFilterPopUp from "../../componenten/HomeFilterPopUp/HomeFilterPopUp";
import Header from "../../componenten/Header/Header";
import { Link } from "react-router-dom";
import Filter from "../../componenten/Filter/Filter";

const Home = () => {
  const { countryPopUp, setCountryPopUp } = useContext(CountryPopUpContext);
  const { sportPopUp, setSportPopUp } = useContext(SportPopUpContext);
  console.log(sportPopUp);
  console.log(countryPopUp);
  return (
    <>
      <Header />
      <Filter />
      <section className="container filter_section">
        <Link to="/detailleague/English Premier League">Test</Link>
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
        <div className="container_output_wrapper"></div>
      </section>
    </>
  );
};

export default Home;
