import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

var googlMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
    height: "calc(100vh - 21.44px - 21.44px - 48px)",
    width: "100%",
};

const center = {
    lat: 37.39877621407124,
    lng: 140.38839775039332,
};


const position1 = {
    lat: 37.40158513497699,
    lng: 140.37495654253738,
};

const position2 = {
    lat: 37.391497962895784,
    lng: 140.37176258063414,
};

const markerLabel1 = {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "15px",
    fontWeight: "100",
    text: "1",
};

const markerLabel2 = {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "15px",
    fontWeight: "100",
    text: "2",
};

const MyComponent = () => {
    return (
        <LoadScript googleMapsApiKey={googlMapsApiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
                <Marker position={position1} label={markerLabel1} />
                <Marker position={position2} label={markerLabel2} /></GoogleMap>
        </LoadScript>
    );
};

export default MyComponent;