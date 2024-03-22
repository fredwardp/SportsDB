import dropDownImg from "/img/dropdown.svg";
import dropDownTurnedImg from "/img/dropdown_turned.svg";
import crossImg from "/img/cross.svg";
import { useContext, useState } from "react";
import { CountryPopUpContext, SportPopUpContext } from "../../context/context";

const HomeFilterDropDown = ({ name, data, func }) => {
  const [countryCross, setCountryCross] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const { countryPopUp, setCountryPopUp } = useContext(CountryPopUpContext);
  const { sportPopUp, setSportPopUp } = useContext(SportPopUpContext);

  return (
    <div className="filter_dropdown">
      <p>{name}</p>
      <img
        onClick={() => setFilterOpen((filterOpen) => !filterOpen)}
        style={{ cursor: "pointer" }}
        src={filterOpen ? dropDownImg : dropDownTurnedImg}
        alt=""
      />
      <div className={`dropdown_popup ${filterOpen ? "" : "dspl_none"}`}>
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
              <img
                className={countryCross == item.data ? "" : "dspl_none"}
                src={crossImg}
                alt=""
              />
            </div>
            <p>{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFilterDropDown;
