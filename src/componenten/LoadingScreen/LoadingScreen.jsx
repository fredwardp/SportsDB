import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/context";
import FetchData from "../FetchData/FetchData";

const LoadingScreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2100);
  }, []);
  return (
    <section>
      <FetchData />
      <h1>test</h1>
    </section>
  );
};

export default LoadingScreen;
