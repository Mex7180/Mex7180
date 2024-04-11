import BasicTable from "./BasicTable.tsx";
import React from "react";
import { useState } from "react";
import { gameData, gameEntry } from "../../test_data/gamesData.tsx";

export default function LastGamesTable() {
    let title:string = "Letze Spiele";
    let table_headers:string[] = ["Datum", "Gegner", "Ort","Resultat"];
    let [table_rows,setTableRows] = useState([
        ["17.03.2023","Gegner 1","Ort1","7:3"],
        ["24.03.2023","Gegner 2","Ort2","10:3"],
        ["31.03.2023","Gegner 3","Ort3","3:3"],
        ["7.04.2023","Gegner 4","Ort1","1:3"],
        ["17.04.2023","Gegner 5","Ort2","0:3"],
        ["17.05.2023","Gegner 6","Ort3","7:3"],
        ]
    );//gameData);

    const handleEditTableRows = (event) => {
        //console.log("HORRAY I MADE IT TILL HERE");
    }

    return (
        <>
            <BasicTable 
            table_title={title} 
            table_headers={table_headers} 
            table_rows={table_rows}
            editTableRows={handleEditTableRows}
            />
        </>
    );
}
