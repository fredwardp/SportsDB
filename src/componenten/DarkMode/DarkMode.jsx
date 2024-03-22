import { useState } from "react";
import "./DarkMode.css";
import darkMode from "/public/img/darkmode.svg";

const DarkMode = () => {
  const [toggle, setToggle] = useState(false);

  const darkLightSwitch = () => {
    setToggle((toggle) => !toggle);
    if (toggle === true) {
      document.documentElement.style.setProperty("--black", "#0f0f0f");
      document.documentElement.style.setProperty("--red", "#e83539");
      document.documentElement.style.setProperty("--white", "#ffffff");
    } else {
      document.documentElement.style.setProperty("--black", "#ffffff");
      document.documentElement.style.setProperty("--red", "#4550B4");
      document.documentElement.style.setProperty("--white", "#0f0f0f");
    }
  };

  return (
    <div className="darkmode_div">
      <img src={darkMode} onClick={darkLightSwitch} alt="" />
    </div>
  );
};

export default DarkMode;
