import "./Header.css";

const Header = () => {
  return (
    <section className="container">
      <header className="header-wrapper">
        <div className="header-img">
          <img src="public/img/header-img.png" alt="" />
        </div>
        <div>
          <p className="header-text">FIND YOUR LEAGUE</p>
        </div>
      </header>
    </section>
  );
};

export default Header;
