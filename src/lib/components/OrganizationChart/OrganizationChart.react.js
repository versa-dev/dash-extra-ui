import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class OrganizationChartNode extends Component {
    constructor(props) {
        super(props);
        this.node = this.props.node;
        this.state = {expanded: this.node.expanded};
    }

    getLeaf() {
        return this.node.leaf === false
            ? false
            : !(this.node.children && this.node.children.length);
    }

    getColspan() {
        return this.node.children && this.node.children.length
            ? this.node.children.length * 2
            : null;
    }

    onNodeClick(event, node) {
        this.props.onNodeClick(event, node);
    }

    toggleNode(event, node) {
        let _expanded = !this.state.expanded;
        this.setState({expanded: _expanded});
        event.preventDefault();
    }

    isSelected() {
        return this.props.isSelected(this.node);
    }

    render() {
        this.node = this.props.node;

        var colspan = this.getColspan();
        let nodeStyleClass = classNames(
                'p-organizationchart-node-content',
                this.node.className,
                {
                    'p-organizationchart-selectable-node':
                        this.props.selectionMode &&
                        this.node.selectable !== false,
                    'p-highlight': this.isSelected(),
                }
            ),
            nodeLabel =
                this.props.nodeTemplate &&
                this.props.nodeTemplate(this.node) ? (
                    <div>{this.props.nodeTemplate(this.node)}</div>
                ) : (
                    <div>{this.node.label}</div>
                ),
            toggleIcon = classNames('p-node-toggler-icon', {
                'pi pi-chevron-down ': this.state.expanded,
                'pi pi-chevron-up ': !this.state.expanded,
                // 'pi pi-chevron-down arrow-down': this.state.expanded,
                // 'pi pi-chevron-up arrow-up': !this.state.expanded,
            }),
            nodeContent = (
                <tr>
                    <td colSpan={colspan}>
                        <div
                            className={nodeStyleClass}
                            onClick={e => this.onNodeClick(e, this.node)}
                        >
                            {nodeLabel}
                            {!this.getLeaf() && (
                                <button
                                    className="p-node-toggler p-link"
                                    onClick={e => this.toggleNode(e, this.node)}
                                >
                                    <i className={toggleIcon}></i>
                                </button>
                            )}
                        </div>
                    </td>
                </tr>
            );

        let _visibility =
                !this.getLeaf() && this.state.expanded ? 'inherit' : 'hidden',
            linesDown = (
                <tr
                    style={{visibility: _visibility}}
                    className="p-organizationchart-lines"
                >
                    <td colSpan={colspan}>
                        <div className="p-organizationchart-line-down"></div>
                    </td>
                </tr>
            ),
            nodeChildLength = this.node.children && this.node.children.length,
            linesMiddle = (
                <tr
                    style={{visibility: _visibility}}
                    className="p-organizationchart-lines"
                >
                    {this.node.children &&
                        this.node.children.map((item, index) => {
                            let leftClass = classNames(
                                    'p-organizationchart-line-left',
                                    {
                                        'p-organizationchart-line-top':
                                            index !== 0,
                                    }
                                ),
                                rightClass = classNames(
                                    'p-organizationchart-line-right',
                                    {
                                        'p-organizationchart-line-top':
                                            index !== nodeChildLength - 1,
                                    }
                                );

                            return [
                                <td
                                    key={index + '_lineleft'}
                                    className={leftClass}
                                >
                                    &nbsp;
                                </td>,
                                <td
                                    key={index + '_lineright'}
                                    className={rightClass}
                                >
                                    &nbsp;
                                </td>,
                            ];
                        })}
                </tr>
            ),
            childNodes = (
                <tr
                    style={{visibility: _visibility}}
                    className="p-organizationchart-nodes"
                >
                    {this.node.children &&
                        this.node.children.map((child, index) => {
                            return (
                                <td key={index} colSpan="2">
                                    <OrganizationChartNode
                                        node={child}
                                        nodeTemplate={this.props.nodeTemplate}
                                        selectionMode={this.props.selectionMode}
                                        onNodeClick={this.props.onNodeClick}
                                        isSelected={this.props.isSelected}
                                    />
                                </td>
                            );
                        })}
                </tr>
            );

        return (
            <table className="p-organizationchart-table">
                <tbody>
                    {nodeContent}
                    {linesDown}
                    {linesMiddle}
                    {childNodes}
                </tbody>
            </table>
        );
    }
}

/**
 * Organization Chart
 */

export default class OrganizationChart extends Component {
    constructor(props) {
        super(props);
        this.root =
            this.props.value && this.props.value.length
                ? this.props.value[0]
                : null;
        this.onNodeClick = this.onNodeClick.bind(this);
        this.isSelected = this.isSelected.bind(this);
    }

    onNodeClick(event, node) {
        if (this.props.selectionMode) {
            let eventTarget = event.target;
            if (
                eventTarget.className &&
                (eventTarget.className.indexOf('p-node-toggler') !== -1 ||
                    eventTarget.className.indexOf('p-node-toggler-icon') !== -1)
            ) {
                return;
            }

            if (node.selectable === false) {
                return;
            }

            let index = this.findIndexInSelection(node);
            let selected = index >= 0;
            let selection;

            if (this.props.selectionMode === 'single') {
                if (selected) {
                    selection = null;
                    if (this.props.onNodeUnselect) {
                        this.props.onNodeUnselect({
                            originalEvent: event,
                            node: node,
                        });
                    }
                } else {
                    selection = node;
                    if (this.props.onNodeSelect) {
                        this.props.onNodeSelect({
                            originalEvent: event,
                            node: node,
                        });
                    }
                }
            } else if (this.props.selectionMode === 'multiple') {
                if (selected) {
                    selection = this.props.selection.filter(
                        (val, i) => i !== index
                    );
                    if (this.props.onNodeUnselect) {
                        this.props.onNodeUnselect({
                            originalEvent: event,
                            node: node,
                        });
                    }
                } else {
                    selection = [...(this.props.selection || []), node];
                    if (this.props.onNodeSelect) {
                        this.props.onNodeSelect({
                            originalEvent: event,
                            node: node,
                        });
                    }
                }
            }

            if (this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    originalEvent: event,
                    data: selection,
                });
            }
        }
    }

    findIndexInSelection(node) {
        let index = -1;

        if (this.props.selectionMode && this.props.selection) {
            if (this.props.selectionMode === 'single') {
                index = this.props.selection === node ? 0 : -1;
            } else if (this.props.selectionMode === 'multiple') {
                for (let i = 0; i < this.props.selection.length; i++) {
                    if (this.props.selection[i] === node) {
                        index = i;
                        break;
                    }
                }
            }
        }

        return index;
    }

    isSelected(node) {
        return this.findIndexInSelection(node) !== -1;
    }

    render() {
        this.root =
            this.props.value && this.props.value.length
                ? this.props.value[0]
                : null;

        var className = classNames(
            'p-organizationchart p-component',
            this.props.className
        );
        return (
            <div
                id={this.props.id}
                style={this.props.style}
                className={className}
            >
                <OrganizationChartNode
                    node={this.root}
                    nodeTemplate={this.props.nodeTemplate}
                    selectionMode={this.props.selectionMode}
                    onNodeClick={this.onNodeClick}
                    isSelected={this.isSelected}
                />
            </div>
        );
    }
}

OrganizationChartNode.defaultProps = {
    node: null,
    nodeTemplate: null,
    root: false,
    first: false,
    last: false,
    selectionMode: null,
    onNodeClick: null,
    isSelected: null,
};

OrganizationChartNode.propTypes = {
    node: PropTypes.any,
    nodeTemplate: PropTypes.any,
    root: PropTypes.bool,
    first: PropTypes.bool,
    last: PropTypes.bool,
    selectionMode: PropTypes.string,
    onNodeClick: PropTypes.func,
    isSelected: PropTypes.func,
};

OrganizationChart.defaultProps = {
    id: null,
    value: null,
    style: null,
    className: null,
    selectionMode: null,
    selection: null,
    nodeTemplate: null,
    onSelectionChange: null,
    onNodeSelect: null,
    onNodeUnselect: null,
};

OrganizationChart.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * An array of nested TreeNodes
     */
    value: PropTypes.any,
    /**
     * Inline style of the element.
     */
    style: PropTypes.object,
    /**
     * Css classes
     */
    className: PropTypes.string,
    /**
     * Defines the selection mode, valid values "single" and "multiple".
     */
    selectionMode: PropTypes.string,
    /**
     * A single treenode instance or an array to refer to the selections.
     */
    selection: PropTypes.any,
    /**
     * 	Template function that gets a node as a parameter and returns a content.
     */
    nodeTemplate: PropTypes.any,
    /**
     * Callback to invoke when node selection changes.
     */
    onSelectionChange: PropTypes.func,
    /**
     * Callback to invoke when a node is unselected.
     */
    onNodeSelect: PropTypes.func,
    /**
     * Callback to invoke when a node is selected.
     */
    onNodeUnselect: PropTypes.func,
};
