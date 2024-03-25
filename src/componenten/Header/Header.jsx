import "./Header.css";

const Header = () => {
  return (
    <section className="container">
      <header className="header-wrapper">
        <div className="header-img">
          <img src="public/img/header-img.png" alt="" />
        </div>
        <div>
          <h1 className="header-text">
            FIND YOUR <br /> LEAGUE
          </h1>
        </div>
      </header>
    </section>
  );
};

export default Header;
