import React, {useState} from 'react';

export default function TodoForm(props) {

    const [value, setValue] = useState("");

    const addItem = () => {
        props.addItem(value);
        // TODO clear input form and reset value state
    }

    return (
        <div style={{display: "flex", flex: 1, flexDirection: "row"}}>
            <label htmlFor="new-todo">Add Item: </label>
            <input style={{marginLeft: 10, marginRight: 10, flex: 1}} placeholder="type here" type="text" id="new-todo"
                   onChange={({target}) => setValue(target.value)}/>
            <button type="button" onClick={addItem}>+</button>
        </div>
    )
}
