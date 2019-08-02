import React, { Component } from 'react';
import SpecItem from '../SpecItem/SpecItem';
import './Specs.css';

class Specs extends Component {
    render() {
        const features = Object.keys(this.props.features)
            .map(key => {
                const options = this.props.features[key].map((item, index) => {
                    console.log(key);
                    return (
                        <SpecItem 
                            keys={key}
                            index={index}
                            item={item}
                            selected={this.props.selected}
                            updateFeature={this.props.updateFeature}/>
                    )
                });

                return (
                    <div className="feature" key={key}>
                        <div className="feature__name">{key}</div>
                        <ul className="feature__list">
                            { options }
                        </ul>
                    </div>
                )
            });

        return (
            <section className="main_form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
            </section>
        )
    }
}

export default Specs;