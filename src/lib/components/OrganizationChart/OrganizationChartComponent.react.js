import PropTypes from 'prop-types';
import React, {Component} from 'react';
import OrganizationChart from './OrganizationChart.react.js';
import './OrganizationChart.css';
import '../../../../extra_dash_ui_components/nova-light/theme.css';
import '../../../../extra_dash_ui_components/primeicons/primeicons.css';


/**
 * OrganizationChartComponent is a component to nicely display a data tree.
 * It takes a property, `value`, which is the actual data object
 * creates a hierachy tree which is then rendered.
 * Other inputs are `selectionMode`, `selection`, `className` and `style`
 * which are optional. Defaults will be applied unless provided by the user.
 */
export default class OrganizationChartComponent extends Component {

    nodeTemplate = node => {
        if (node.type === 'person') {
            return (
                <div className="node-card">
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img
                            alt={node.data.avatar}
                            src={node.data.avatar}
                            style={{width: '60px', height: '60px'}}
                        />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        } else {
            return node.label;
        }
    };

    render() {
        if (this.props.value.length == 0) {
            return '';
        }
        const {setProps} = this.props;
        return (
            <div>
                <OrganizationChart
                    nodeTemplate={this.nodeTemplate}
                    onSelectionChange={event =>
                        setProps({selection: event.data})
                    }
                    {...this.props}
                />
            </div>
        );
    }
}

OrganizationChartComponent.defaultProps = {
    id: `${Math.random()}`,
    selectionMode: null,
    selection: null,
    className: null,
    style: null,
    setProps: () => {},
};

OrganizationChartComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * An array of nested TreeNodes. A valid treenode should contain at least a `label` property.
     * Please check on sample data at /sample_data/org_data
     */
    value: PropTypes.arrayOf(PropTypes.object),
    /**
     * Defines the selection mode, valid values "single" or "multiple".
     */
    selectionMode: PropTypes.oneOf(['single', 'multiple']),
    /**
     * A single treenode instance or an array to refer to the selections.
     */
    selection: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
    /**
     * Style class of the component.
     */
    className: PropTypes.string,
    /**
     * Inline style of the component.
     */
    style: PropTypes.object,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
