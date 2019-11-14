import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class PageLinks extends Component {
    constructor(props) {
        super(props);
    }
    
    onPageLinkClick(event, pageLink) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                value: pageLink
            });
        }
        
        event.preventDefault();
    }

    render() {
        let elements = this.props.value.map((pageLink, i) => {
            let pageClassName = classNames('p-paginator-page p-paginator-element p-link', {
                'p-highlight': ((pageLink - 1) === this.props.page)
            });

            return (
                <button key={pageLink} className={pageClassName} onClick={(e) => this.onPageLinkClick(e, pageLink)}>{pageLink}</button>
            );
        });

        return <span className="p-paginator-pages">{elements}</span>;
    }
}

PageLinks.defaultProps = {
    id: null,
    value: null,
    page: null,
    onClick: null
}

PageLinks.propTypes = {
    id: PropTypes.string,
    value: PropTypes.array,
    page: PropTypes.number,
    onClick: PropTypes.func
}