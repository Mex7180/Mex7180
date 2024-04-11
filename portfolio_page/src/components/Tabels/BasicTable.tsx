import React from "react";
import EditTool from "../ToolBar/EditTool.tsx";


interface Props {
    table_title: string,
    table_headers: string[],
    table_rows: string[][],
    editTableRows: (event) => void
    }


export default function BasicTable({table_title,table_headers,table_rows,editTableRows}: Props) {

    const handleOnClick = (event) => {
        editTableRows(event);
    }
    return (
        <>
            <h2>{table_title}</h2>
            <table className="table table-dark table-hover table-sm">
                <thead>
                    <tr>{table_headers.map((header,index) => (<th key={"header"+index} scope="col">{header}</th>))} <th>Edit</th></tr>
                </thead>
                <tbody>
                    {table_rows.map((row,index) => (<tr key={"row"+index}> {row.map((el,col_i) => (<td key={"row"+index+"col"+col_i}>{el}</td>))}<td><EditTool handleOnClick={handleOnClick}/></td></tr>))}
                </tbody>
            </table>
        </>
    );
}