import React, { Component } from "react";
import './Editor.css'

class Editor extends Component{

    constructor(){
        super();
        this.state={
            note: "Write down your thoughts!!:)"
        };
    }

    changeText(elt){
        this.setState({
            note: elt.target.value
        })
    }

    render(){

        return(
            <div className="typeIn">
                <div className="input">
                    <h2>Input</h2>
                    <textarea onChange={(elt)=>this.changeText(elt)} value={this.state.note} />
                </div>
                <div className="note">
                    <h2>Output</h2>
                    <div className="proNote">{this.state.note}</div>
                </div>
            </div>
            )

    }
}

export default Editor