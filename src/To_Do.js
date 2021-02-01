import React, {Component} from "react";
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

export default class To_Do extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            items: []
        };

    }

    handleChange = (event) => this.setState({input: event.target.value});
    handleAdd = (event) => (event.preventDefault(), this.setState(state => ({input: this.state.input},
        {items: [...this.state.items, this.state.input]})));

    handleDel = () => (
        <ul>
            {this.state.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );


    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    <input value={this.state.input} onChange={this.handleChange}/>
                    <button type="submit">Add!</button>
                    <button type="submit">Del!</button>
                </form>
                <ul>
                    {this.state.items.map((item, index) => (
                        <List>
                            <Checkbox tabIndex={-1}/><ListItemText key={index}>{item}</ListItemText>
                        </List>
                    ))}
                </ul>
            </div>

        )
    }
}
