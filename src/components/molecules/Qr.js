import React from "react"
import QRCode from "qrcode.react"
import './Qr.css';
import { Link } from "react-router-dom";

const googleAppsScriptUrl = process.env.REACT_APP_GOOGLE_APPS_SCRIPT_URL

class Qr extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-align-center">店員にQRコードを提示してください。</h2>
                <div className="text-align-center qr">
                    <QRCode value={googleAppsScriptUrl} size={250} level="H" />
                </div>
                <p className='text-align-center'><Link to="/" className='btn btn--green'>トップ画面に戻る</Link></p>
            </div>
        )
    }
}

export default Qr;