import { useContext } from "react";
import {
  CountryPopUpContext,
  SportPopUpContext,
  CountriesFilterOpenContext,
  SportsFilterOpenContext,
} from "../../context/context";

const HomeFilterPopUp = ({ func }) => {
  const { countryPopUp, setCountryPopUp } = useContext(CountryPopUpContext);
  const { sportPopUp, setSportPopUp } = useContext(SportPopUpContext);
  const { setCountriesFilterOpen } = useContext(CountriesFilterOpenContext);
  const { setSportsFilterOpen } = useContext(SportsFilterOpenContext);
  return (
    <>
      <div className="filter_popup">
        {func === "c" ? (
          <>
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCountryPopUp(""), setCountriesFilterOpen("");
              }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L14 14"
                stroke="var(--white)"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M14 2L2 14"
                stroke="var(--white)"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>

            <p>{countryPopUp}</p>
          </>
        ) : (
          ""
        )}
        {func === "a" ? (
          <>
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSportPopUp(""), setSportsFilterOpen("");
              }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L14 14"
                stroke="var(--white)"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M14 2L2 14"
                stroke="var(--white)"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>

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
