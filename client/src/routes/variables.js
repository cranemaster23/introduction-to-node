import React, {Component} from 'react';
import axios from "axios";
import { render } from "react-dom";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import "codemirror/lib/codemirror.css";
import './main.css'



class Variables extends Component {
    constructor(props) {
        super(props)
        this.state = {
            runCode: false,
            outputText: 'console.log("Hello World")',
            returnValue: ''
        }
    }
    runCode = () => {
        axios.post('/getting-started', {data: this.state.outputText}).then( response => {
                this.setState({runCode: true})
                this.setState({returnValue: response.data})
        })

    }
    render() {
        return (

            <div>
                <div className="Output">
                    <h1>Variables</h1>
                    <p>{this.state.variableId}</p>
                </div>
                <CodeMirror
                    value={this.state.outputText}
                    options={{
                        mode: 'javascript',
                        lineNumbers: true,
                        resetSelectionOnContextMenu: false,
                    }}
                    onChange={(editor, data, value) => {
                        this.setState({
                            runCode: false,
                            outputText: value,
                        })
                    }}
                />
                <button onClick={this.runCode}>run code</button>
                <div className="Output">
                    <pre>{this.state.runCode && this.state.returnValue}</pre>
                </div>
            </div>
        )
    }
}

export default Variables;