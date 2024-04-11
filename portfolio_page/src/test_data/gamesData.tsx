export interface gameEntry {
    id:number,
    date:string,
    team:string,
    place:string,
    game_result:string
    }

export const gameData:Array<gameEntry> = [
        {
            id:0,
            date:"17.03.2023",
            team:"Gegner 1",
            place:"Beispielort 1",
            game_result:"7:3"},
        {
            id:1,
            date:"10.03.2023",
            team:"Gegner 2",
            place:"Beispielort 2",
            game_result:"17:13"},
        {
            id:2,
            date:"7.03.2023",
            team:"Gegner 3",
            place:"Beispielort 1",
            game_result:"0:0"},
        {
            id:3,
            date:"29.03.2023",
            team:"Gegner 4",
            place:"Beispielort 1",
            game_result:"7:8"},
        {
            id:4,
            date:"17.03.2023",
            team:"Gegner 5",
            place:"Beispielort 1",
            game_result:"10:3"}
        ];