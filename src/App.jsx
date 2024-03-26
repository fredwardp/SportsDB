import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailLeague from "./pages/DetailLeague/DetailLeague";
import DetailTeam from "./pages/DetailTeams/DetailTeam";
import { useState } from "react";
import { LoadingContext, AllLeaguesContext, AllPlayersContext, AllTeamsContext, SearchValueContext, SportPopUpContext, CountryPopUpContext, CountriesFilterOpenContext, SportsFilterOpenContext } from "./context/context";
import LoadingScreen from "./componenten/LoadingScreen/LoadingScreen";
import DetailPlayer from "./pages/DetailPlayer/DetailPlayer";
import Nav from "./componenten/Nav/Nav";
import Footer from "./componenten/Footer/Footer";
import ScrollUp from "./componenten/ScrollUp/ScrollUp";
import ScrollToTop from "./componenten/ScrollToTop/ScrollToTop";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [leagues, setLeagues] = useState();
    const [teams, setTeams] = useState();
    const [players, setPlayers] = useState();
    const [searchValue, setSearchValue] = useState();
    const [countryPopUp, setCountryPopUp] = useState();
    const [sportPopUp, setSportPopUp] = useState();
    const [countriesFilterOpen, setCountriesFilterOpen] = useState(false);
    const [sportsFilterOpen, setSportsFilterOpen] = useState(false);

    return (
        <SportsFilterOpenContext.Provider value={{ sportsFilterOpen, setSportsFilterOpen }}>
            <CountriesFilterOpenContext.Provider value={{ countriesFilterOpen, setCountriesFilterOpen }}>
                <SportPopUpContext.Provider value={{ sportPopUp, setSportPopUp }}>
                    <CountryPopUpContext.Provider value={{ countryPopUp, setCountryPopUp }}>
                        <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
                            <AllPlayersContext.Provider value={{ players, setPlayers }}>
                                <AllTeamsContext.Provider value={{ teams, setTeams }}>
                                    <AllLeaguesContext.Provider value={{ leagues, setLeagues }}>
                                        <LoadingContext.Provider value={{ loading, setLoading }}>
                                            {loading ? (
                                                <BrowserRouter>
                                                    <ScrollUp />
                                                    <ScrollToTop />
                                                    <Nav />
                                                    <Routes>
                                                        <Route path="/" element={<Home />} />
                                                        <Route path="/detailleague/:id" element={<DetailLeague />} />
                                                        <Route path="/detailteams/:teamName" element={<DetailTeam />} />
                                                        <Route path="/detailplayer/:id" element={<DetailPlayer />} />
                                                    </Routes>
                                                    <Footer />
                                                </BrowserRouter>
                                            ) : (
                                                <LoadingScreen />
                                            )}
                                        </LoadingContext.Provider>
                                    </AllLeaguesContext.Provider>
                                </AllTeamsContext.Provider>
                            </AllPlayersContext.Provider>
                        </SearchValueContext.Provider>
                    </CountryPopUpContext.Provider>
                </SportPopUpContext.Provider>
            </CountriesFilterOpenContext.Provider>
        </SportsFilterOpenContext.Provider>
    );
};

export default App;
