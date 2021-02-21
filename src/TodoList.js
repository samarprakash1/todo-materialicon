import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import ListComponent from './ListComponent';

const TodoList = () => {
    const [item, setItem] = useState('')
    const [newItem, setNewItem]= useState([])
    const itemEvent=(e)=>{
        setItem(e.target.value)
    }
    const listOfItem = ()=>{
        setNewItem((prevValue)=>{
            return [...prevValue, item]
        })
        setItem(" ")
    }
    return (
        <>
        <div className="container">
            <div>
            <br></br>
                <h1>ToDo List</h1>
                <br></br>
                <input 
                 type="text"
                 value={item}
                 placeholder="Add a list"
                 onChange={itemEvent}
                 ></input>
                <Button onClick={listOfItem}>
                <AddIcon />
                </Button>
                <br></br>
                <ul>
                    {
                        newItem.map((val, index)=>{
                            return <ListComponent key={index} text={val}/>
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default TodoList
