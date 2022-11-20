import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

var googlMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const shopListList = [
    {
        position: {
            lat: 37.40158513497699,
            lng: 140.37495654253738,
        },
        label: {
            color: "white",
            fontFamily: "sans-serif",
            fontSize: "15px",
            fontWeight: "100",
            text: "1",
        },
        shopName: '',
    },
    {
        position: {
            lat: 37.391497962895784,
            lng: 140.37176258063414,
        },
        label: {
            color: "white",
            fontFamily: "sans-serif",
            fontSize: "15px",
            fontWeight: "100",
            text: "2",
        },
        shopName: '',
    }
]

const containerStyle = {
    height: "calc(100vh - 21.44px - 21.44px - 48px - 200px)",
    width: "100%",
};

const center = {
    lat: 37.39877621407124,
    lng: 140.38839775039332,
};

const MyComponent = () => {
    return (
        <LoadScript googleMapsApiKey={googlMapsApiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
                {shopListList.map((shop) => {
                    return (
                        <Marker
                            position={shop.position}
                            label={shop.label}
                        />
                    )
                })}
            </GoogleMap>
        </LoadScript>
    );
};

export default MyComponent;