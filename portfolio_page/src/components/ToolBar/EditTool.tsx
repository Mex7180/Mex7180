import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";

interface Props {
    handleOnClick: (event) => void
}

export default function EditTool({handleOnClick}: Props) {
    return (
        <>
        <button onClick={handleOnClick}>
        <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        </>

    );
}
