import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const ListComponent = (props) => {
    const [line, setLine]=useState(false)
    const cutIt=()=>{
        setLine(true);
    }
    return (
        <>
        <div className="listbtn">
        <span onClick={cutIt}> <DeleteIcon /> </span>
        <li style={{ textDecoration: line ? "line-through" : "none"}}>{props.text}</li>

        </div>
        </>
    )
}

export default ListComponent
