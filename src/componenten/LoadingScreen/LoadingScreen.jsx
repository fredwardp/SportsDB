import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/context";
import FetchData from "../FetchData/FetchData";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <section>
      <FetchData />
      <div className="loading-anim">
        <img src="./img/anim.gif" alt="Loading nimation" />
        <h1 className="loading-title opensans">SPORTS DB</h1>
        <h2 className="loading-text opensans">
          THE ONLY SPORTS RESSOURCE YOU NEED
        </h2>
      </div>
    </section>
  );
};

export default LoadingScreen;
