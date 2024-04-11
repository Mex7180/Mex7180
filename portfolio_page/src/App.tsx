import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import { ChampionshipModelPage } from "./pages/ChampionshipModelPage.tsx";
import "./App.css";
import React from "react";
import LastGamesTable from "./components/Tabels/LastGamesTable.tsx";

export const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<LastGamesTable></LastGamesTable>}
        />
        <Route path="/championship-model-page" element={<ChampionshipModelPage/>}/>
        <Route path="/test" element={<Header></Header>} />
      </Routes>
    </Router>
  );
};

export default App;
