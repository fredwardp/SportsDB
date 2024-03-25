import { useState, useEffect } from "react";

const AllSportsImage = () => {
    const [myImageSource, setMyImageSource] = useState([]);

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/all_sports.php")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("No data found");
                }
                return res.json();
            })
            .then((data) => {
                if (data && data.sports) {
                    const sportsArray = data.sports.map((element) => ({
                        strSport: element.strSport,
                        strSportThumb: element.strSportThumb,
                    }));
                    setMyImageSource(sportsArray);
                }
            })
            .catch((error) => console.log("An error has occurred", error));
    }, []);

    return myImageSource;
};

export default AllSportsImage;
