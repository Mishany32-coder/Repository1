import React, {useState} from 'react'
import List from "@material-ui/core/List";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";

export default function To_Do_Test() {
    let [input, set_input] = useState('');
    let [submit,set_submit] = useState('');
    let [items,set_items]=useState([]);

    const handleChange = (event) => set_input(input = event.target.value);
    const handleAdd = (event) => (event.preventDefault(),set_submit( input=input), set_items(...items,input));

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input value={input} onChange={handleChange}/>
                <button type="submit">Add!</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <List>
                        <Checkbox tabIndex={-1}/><ListItemText key={index}>{item}</ListItemText>
                    </List>
                ))}
            </ul>
        </div>
    )
}
