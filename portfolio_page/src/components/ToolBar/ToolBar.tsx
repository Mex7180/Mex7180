import React from "react";
import './ToolBar.css';
import EditTool from "./EditTool.tsx";

export default function ToolBar() {

    const handleClick = () => {
        return
    }

    return (
        <>
            <div className="toolbar">
                <EditTool handleOnClick={handleClick}></EditTool>
            </div>
        </>
    );
}
