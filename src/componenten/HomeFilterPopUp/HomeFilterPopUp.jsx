import { useContext } from "react";
import { CountryPopUpContext, SportPopUpContext } from "../../context/context";
import crossImg from "/img/cross.svg";
const HomeFilterPopUp = ({ func }) => {
  const { countryPopUp, setCountryPopUp } = useContext(CountryPopUpContext);
  const { sportPopUp, setSportPopUp } = useContext(SportPopUpContext);
  return (
    <>
      <div className="filter_popup">
        {func === "c" ? (
          <>
            <img onClick={() => setCountryPopUp("")} src={crossImg} alt="" />
            <p>{countryPopUp}</p>
          </>
        ) : (
          ""
        )}
        {func === "a" ? (
          <>
            <img onClick={() => setSportPopUp("")} src={crossImg} alt="" />
            <p>{sportPopUp}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default HomeFilterPopUp;
