import "./Home.css";
import { useContext, useState } from "react";

import countries from "../../assets/Data/Countries";
import sports from "../../assets/Data/AllSports";
import HomeFilterDropDown from "../../componenten/HomeFilterDropDown/HomeFilterDropDown";

useContext;
const Home = () => {
  // const [selectCountry, setSelectCountry] = useState(false);
  const [countriePopUp, setCountriePopUp] = useState(false);
  const [sportPopUp, setSportPopUp] = useState(false);
  const countryPopUp = () => {
    setCountriePopUp((countriePopUp) => !countriePopUp);
  };

  const sportsPopUp = () => {
    setSportPopUp((sportPopUp) => !sportPopUp);
  };

  return (
    <>
      <section className="container filter_section">
        <div className="filter_spcbtw">
          <div className="filter_popup"></div>
          <div className="filter_button_wrapper">
            <HomeFilterDropDown
              func={countryPopUp}
              data={countries}
              name="All Countries"
            />
            <HomeFilterDropDown
              func={sportsPopUp}
              data={sports}
              name="All Sports"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
