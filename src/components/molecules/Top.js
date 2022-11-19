import React from 'react';
import { Link } from 'react-router-dom';
import './Top.css';
import Map from './Map'

class Top extends React.Component {
    render() {
        return (
            <div>
                <h1 className='text-align-center'>鯉MAP</h1>
                <p className='text-align-center'><Link to="/Qr" className='btn btn--orange'>QRを表示</Link></p>
                <Map />
                <h2 className='text-align-center'>お店一覧</h2>
                <div>
                    <p className='text-align-center'>① 老舗1番</p>
                    <p className='text-align-center'>② 鯉よ来い</p>
                </div>
            </div>
        );
    }
}

export default Top;