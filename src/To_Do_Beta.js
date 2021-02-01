import React, {Component} from "react";

export default class To_Do_Beta extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            submit: ""
        };

    }

    handleChange = (event) => this.setState({input: event.target.value});
    handleSubmit = (event) => (event.preventDefault(), this.setState(state => ({submit: state.input})));

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}/>
                    <button type="submit">Submit!</button>
                </form>
                <h5>Controlled input: </h5>
                <h3>{this.state.submit}</h3>
            </div>

        )
    }
}
