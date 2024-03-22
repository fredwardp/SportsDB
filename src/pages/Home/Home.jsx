import "./Home.css";
import { useContext, useState } from "react";
import countries from "../../assets/Data/Countries";
import sports from "../../assets/Data/AllSports";
import HomeFilterDropDown from "../../componenten/HomeFilterDropDown/HomeFilterDropDown";
import { SportPopUpContext, CountryPopUpContext } from "../../context/context";
import HomeFilterPopUp from "../../componenten/HomeFilterPopUp/HomeFilterPopUp";

const Home = () => {
  const { countryPopUp, setCountryPopUp } = useContext(CountryPopUpContext);
  const { sportPopUp, setSportPopUp } = useContext(SportPopUpContext);
  console.log(sportPopUp);
  console.log(countryPopUp);
  return (
    <>
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
      </section>
    </>
  );
};

export default Home;
