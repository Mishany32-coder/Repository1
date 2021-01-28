import React, {Component} from "react";

export default class Ccomponent extends Component
{

    constructor(props) {
        super(props);

        this.state={
            name:"Alex"
        };

        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
            if(this.state.name="Alex")
                this.setState({name:"Петя"})
            else
                this.setState({name:"Alex"})

    }
    render()
    {
        return(
            <div>
                <h1> Class component {this.state.name} </h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
