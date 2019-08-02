import React, { Component } from 'react';
import './SpecItem.css';

class SpecItem extends Component {
    render() {
        const selectedClass = (this.props.item.name === this.props.selected[this.props.keys].name ? 'feature__selected' : '');

        const featureClass = 'feature__option ' + selectedClass;

        return (
            <li key={this.props.index} className="feature__item">
                <div 
                    className={featureClass}
                    onClick={e => this.props.updateFeature(this.props.keys, this.props.item)}>
                    { this.props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.item.cost) })
                </div>
            </li>
        )
    }
}

export default SpecItem;