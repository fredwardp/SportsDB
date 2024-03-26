import { useContext, useState } from "react";
import {
  CountriesFilterOpenContext,
  CountryPopUpContext,
  SportPopUpContext,
  SportsFilterOpenContext,
} from "../../context/context";

const HomeFilterDropDown = ({ name, data, func }) => {
  const [countryCross, setCountryCross] = useState("");
  const { setCountryPopUp } = useContext(CountryPopUpContext);
  const { setSportPopUp } = useContext(SportPopUpContext);
  const { countriesFilterOpen, setCountriesFilterOpen } = useContext(
    CountriesFilterOpenContext
  );
  const { sportsFilterOpen, setSportsFilterOpen } = useContext(
    SportsFilterOpenContext
  );

  // func === "c"
  //   ? setFilterOpen(countriesFilterOpen)
  //   : setFilterOpen(sportsFilterOpen);

  return (
    <div className="filter_dropdown">
      <div className="filter_dropdown_wrapper">
        <p>{name}</p>
        {func === "c" && countriesFilterOpen ? (
          <svg
            style={{ cursor: "pointer" }}
            onClick={() =>
              func === "c"
                ? (setCountriesFilterOpen(
                    (countriesFilterOpen) => !countriesFilterOpen
                  ),
                  setSportsFilterOpen(false))
                : (setSportsFilterOpen((sportsFilterOpen) => !sportsFilterOpen),
                  setCountriesFilterOpen(false))
            }
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_75_658)">
              <path
                d="M15.821 13.9488L8.50342 1.58252L1.27398 13.9488"
                stroke="var(--white)"
                strokeWidth="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_75_658">
                <rect
                  width="17"
                  height="15"
                  fill="var(--white)"
                  transform="translate(17 15) rotate(-180)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            style={{ cursor: "pointer" }}
            onClick={() =>
              func === "c"
                ? (setCountriesFilterOpen(
                    (countriesFilterOpen) => !countriesFilterOpen
                  ),
                  setSportsFilterOpen(false))
                : (setSportsFilterOpen((sportsFilterOpen) => !sportsFilterOpen),
                  setCountriesFilterOpen(false))
            }
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4772_585)">
              <path
                d="M1.17898 1.05115L8.49658 13.4175L15.726 1.05115"
                stroke="var(--white)"
                strokeWidth="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_4772_585">
                <rect width="17" height="15" fill="var(--white)" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>

      <div
        className={`dropdown_popup ${
          func === "c"
            ? countriesFilterOpen
              ? ""
              : "dspl_none"
            : sportsFilterOpen
            ? ""
            : "dspl_none"
        }`}
      >
        {data.map((item, index) => (
          <div
            style={{ cursor: "pointer" }}
            key={index}
            className="dropdown_border"
            onClick={() => {
              setCountryCross(item.data);
              func === "c"
                ? setCountryPopUp(item.data)
                : setSportPopUp(item.data);
            }}
          >
            <div className="filter_square ">
              <svg
                className={countryCross == item.data ? "" : "dspl_none"}
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
            </div>
            <p>{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFilterDropDown;
