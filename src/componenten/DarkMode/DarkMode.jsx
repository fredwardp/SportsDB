import { useState } from "react";
import "./DarkMode.css";
import blackRed from "../../../public/img/color_icons/black_red.svg";
import blackYellow from "../../../public/img/color_icons/black_yellow.svg";
import blueRed from "../../../public/img/color_icons/blue_red.svg";
import fruityOrange from "../../../public/img/color_icons/fruity_orange.svg";
import greenTürkis from "../../../public/img/color_icons/green_türkis.svg";
import paperBlue from "../../../public/img/color_icons/paper_blue.svg";

const DarkMode = () => {
  const [toggle, setToggle] = useState(false);

  const darkLightSwitch = () => {
    // setToggle((toggle) => !toggle);
    if (toggle === true) {
      document.documentElement.style.setProperty("--black", "#0f0f0f");
      document.documentElement.style.setProperty("--red", "#e83539");
      document.documentElement.style.setProperty("--white", "#ffffff");
      // document.body.classList.add("dark-mode");
    } else {
      document.documentElement.style.setProperty("--black", "#EDECE7");
      document.documentElement.style.setProperty("--red", "#4550B4");
      document.documentElement.style.setProperty("--white", "#15132D");
      // document.body.classList.remove("dark-mode");
    }
  };

  console.log(toggle);

  return (
    <div
      className="darkmode_div"
      onClick={() => setToggle((toggle) => !toggle)}
    >
      <div className={`${toggle ? "color_none" : ""} color_modes `}>
        <img src={blackRed} alt="" />
        <img src={paperBlue} alt="" />
        <img src={greenTürkis} alt="" />
        <img src={blackYellow} alt="" />
        <img src={blueRed} alt="" />
        <img src={fruityOrange} alt="" />
      </div>
      {/* <img src={darkMode} onClick={darkLightSwitch} alt="" /> */}
      <svg
        onHove
        onClick={darkLightSwitch}
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>ic_fluent_dark_theme_24_regular</title>
        <desc>Created with Sketch.</desc>
        <g
          id="🔍-Product-Icons"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="ic_fluent_dark_theme_24_regular"
            fillRule="nonzero"
            fill="var(--white)"
          >
            <path
              d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"
              id="🎨-Color"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default DarkMode;
