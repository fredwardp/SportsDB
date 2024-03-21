import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailLeague from "./pages/DetailLeague/DetailLeague";
import DetailTeam from "./pages/DetailTeams/DetailTeam";
import { useState } from "react";
import {
  LoadingContext,
  AllLeaguesContext,
  AllPlayersContext,
  AllTeamsContext,
} from "./context/context";
import LoadingScreen from "./componenten/LoadingScreen/LoadingScreen";
import DetailPlayer from "./pages/DetailPlayer/DetailPlayer";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [leagues, setLeagues] = useState();
  const [teams, setTeams] = useState();
  const [players, setPlayers] = useState();

  return (
    <AllPlayersContext.Provider value={{ players, setPlayers }}>
      <AllTeamsContext.Provider value={{ teams, setTeams }}>
        <AllLeaguesContext.Provider value={{ leagues, setLeagues }}>
          <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading ? (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/detailleague/:id" element={<DetailLeague />} />
                  <Route path="/detailteams/:id" element={<DetailTeam />} />
                  <Route path="/detailplayer/:id" element={<DetailPlayer />} />
                </Routes>
              </BrowserRouter>
            ) : (
              <LoadingScreen />
            )}
          </LoadingContext.Provider>
        </AllLeaguesContext.Provider>
      </AllTeamsContext.Provider>
    </AllPlayersContext.Provider>
  );
};

export default App;
