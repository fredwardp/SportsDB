import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/context";
import FetchData from "../FetchData/FetchData";
import "./LoadingScreen.css";

const LoadingScreen = () => {
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);
    return (
        <section>
            <FetchData />
            <div className="loading-anim">
                <img src="../../../public/img/anim.gif" alt="Loading nimation" />
                <h1>Sports Database</h1>
                <h3>The only sports resource you need</h3>
            </div>
        </section>
    );
};

export default LoadingScreen;
