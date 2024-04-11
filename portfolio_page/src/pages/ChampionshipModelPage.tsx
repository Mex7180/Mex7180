import "./ChampionshipModelPage.css";
import LastGamesTable from "../components/Tabels/LastGamesTable.tsx";
import React from "react";
import ToolBar from "../components/ToolBar/ToolBar.tsx";

export const ChampionshipModelPage = () => {
  return (
    <div className="page-container">
      <h1>HELLO WORLD</h1>
      <ToolBar></ToolBar>
      <LastGamesTable></LastGamesTable>
    </div>
  );
};
