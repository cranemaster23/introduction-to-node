import React, {Component} from "react";
import axios from "axios";
import {UnControlled as CodeMirror} from "react-codemirror2";
import { Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import createHistory from 'history/createBrowserHistory'

class VariablesId extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            content: '',
            runCode: false,
            outputText: '',
            returnValue: '',
            variableId: this.props.match.params.id
            // questionId: this.props.match.params.questionId
        }
    }
    runCode = () => {
        axios.post('/getting-started', {data: this.state.outputText}).then( response => {
            this.setState({runCode: true})
            this.setState({returnValue: response.data})
            console.log(this.props.match)
        })

    }
    componentDidMount() {
       this.retrieveData()
    }


    retrieveData = () => {
        axios.get( `/variables?id=${this.state.variableId}`).then( response => {
            this.setState({name: response.data.name})
            this.setState({outputText: response.data.startingCode})
            this.setState({content: response.data.text})
    })
    }

    onSubmit = () => {
        const redirectTo = `/variables/${Number(this.state.variableId) + 1}`
        this.props.history.push(redirectTo);
        const history = createHistory();
        history.go(0)
    }

    render() {
        return (
            <div>
                <div className="Output">
                    <h1>Variables</h1>
                    <h4>{this.state.name}</h4>
                    <p>{this.state.content}</p>
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
                <button onClick={this.onSubmit}>Next Page</button>
                <div className="Output">
                    <pre>{this.state.runCode && this.state.returnValue}</pre>
                </div>
            </div>
        )
    }
}

export default VariablesId;