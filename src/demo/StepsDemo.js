import React, {Component} from 'react';
import {StepsComponent, MenuBarComponent, PanelMenuComponent} from '../lib';

class StepsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    setProps = newProps => {
        console.log(newProps);
        this.setState(newProps);
    };

    render() {
        const items = [
            {
                label: 'Personal',
            },
            {
                label: 'Seat',
            },
            {
                label: 'Payment',
            },
            {
                label: 'Confirmation',
            },
        ];

        const menuitems = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video',
                            },
                        ],
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link',
                    },
                ],
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left',
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right',
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center',
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify',
                    },
                ],
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print',
                                    },
                                ],
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus',
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus',
                            },
                        ],
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off',
            },
        ];

        const panelitems = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video',
                            },
                        ],
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash',
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link',
                    },
                ],
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left',
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right',
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center',
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify',
                    },
                ],
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print',
                                    },
                                ],
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus',
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus',
                            },
                        ],
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus',
                            },
                        ],
                    },
                ],
            },
        ];

        return (
            <div>
                <StepsComponent
                    model={items}
                    activeIndex={this.state.activeIndex}
                    setProps={this.setProps}
                />
                <MenuBarComponent
                    activeItem={this.state.activeItem}
                    menubarInput={this.state.menubarInput}
                    inputText={true}
                    button={true}
                    // btnlabel="Logout"
                    // btnicon="pi pi-power-off"
                    // inputPlaceholder="Search"
                    setProps={this.setProps}
                    model={menuitems}
                />
                <PanelMenuComponent
                    id={'0'}
                    model={panelitems}
                    style={{width: '300px'}}
                    setProps={this.setProps}
                />
            </div>
        );
    }
}

export default StepsDemo;
