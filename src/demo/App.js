/* eslint no-magic-numbers: 0 */
import React, { Component } from 'react';
import { ExtraDashUiComponents, OrganizationChartComponent } from '../lib';
import orgSample from './sampleData.js/orgChartData';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data: orgSample.data,
            data1: orgSample.data1,
            selection: null,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        console.log(newProps)
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <h1>Hello, Dash!</h1>
                <OrganizationChartComponent
                    setProps={this.setProps}
                    value={this.state.data1}
                    selectionMode='multiple'
                    selection={this.state.selection}
                />
                <ExtraDashUiComponents
                    setProps={this.setProps}
                    value={this.state.value}
                />
            </div>
        );
    }
}

export default App;
