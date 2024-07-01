import "./Header.css";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-img">
        <img src="./img/header-img.png" alt="" />
      </div>
      <div>
        <h1 className="header-text">
          FIND YOUR <br /> LEAGUE
        </h1>
        {/* <h1 className="header-text header-text2">
          FIND YOUR <br /> LEAGUE
        </h1> */}
      </div>
    </header>
  );
};

export default Header;
