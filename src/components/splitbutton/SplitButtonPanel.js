import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class SplitButtonPanel extends Component {

    static defaultProps = {
        appendTo: null,
        menuStyle: null,
        menuClassName: null
    };

    static propTypes = {
        appendTo: PropTypes.object,
        menustyle: PropTypes.object,
        menuClassName: PropTypes.string
    };

    renderElement() {
        let className = classNames('p-menu p-menu-dynamic p-component', this.props.menuClassName);

        return (
            <div className={className} style={this.props.menuStyle} ref={(el) => { this.element = el; }}>
                <ul className="p-menu-list p-reset">
                    {this.props.children}
                </ul>
            </div>
        );
    }

    render() {
        let element = this.renderElement();

        if (this.props.appendTo) {
            return ReactDOM.createPortal(element, this.props.appendTo);
        }
        else {
            return element;
        }
    }

}