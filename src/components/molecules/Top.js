import React from 'react';
import './Top.css';
import Map from './Map'

class Top extends React.Component {
    render() {
        return (
            <div>
                <h1>鯉MAP</h1>
                <Map />
            </div>
        );
    }
}

export default Top;