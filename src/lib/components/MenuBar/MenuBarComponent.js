import React, {Component} from 'react';
import {Menubar} from './MenuBar';
import Button from '../Button/Button';
import {InputText} from '../Inputtext/InputText';
import './MenuBarComponent.css';


export default class MenubarComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="content-section implementation">
                <Menubar
                    model={this.props.items}
                    setProps={props => this.props.setProps(props)}
                    activeItem={this.props.activeItem}
                >
                    <InputText
                        placeholder={this.props.inputPlaceholder}
                        type="text"
                    />
                    <Button
                        label={this.props.btnlabel}
                        icon={this.props.btnicon}
                        style={{marginLeft: 4}}
                    />
                </Menubar>
            </div>
        );
    }
}
