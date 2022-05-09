import * as React from 'react';
import MapView, { Callout, Circle, Marker, Polygon } from 'react-native-maps';
import { getLocation } from '../services/MapService';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { Button, Text } from 'react-native-elements';
import { commons, colors } from "../../assets/styles/appStyles";

export const MapPolygon = () => {
    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [locationServiceEnabled, setLocationServiceEnabled] = React.useState(false);
    const [inside, setInside] = React.useState(false);
    const [arrayLocation, setArrayLocation] = React.useState([]);
    const [ping, setPing] = React.useState({
        latitude: -0.18621, longitude: -78.50209,
    })
    var point = { latitude: -0.18621, longitude: -78.50209 };
    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            setLocationServiceEnabled(enabled);
            console.log("IF", enabled)
        } else {
            setLocationServiceEnabled(enabled);
            GetCurrentLocation();
            console.log("ELSE", enabled)
        }
    };
    const GetCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            Alert.alert(
                "Permission not granted",
                "Allow the app to use location service.",
                [{ text: "OK" }],
                { cancelable: false }
            );
            setState(false);
        }
        await getLocation(setArrayLocation, "La Granja");
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            console.error(errorMsg);
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setPing({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        })
        //console.log('Location', location);

    }


    React.useEffect(() => {
        (async () => {
            CheckIfLocationEnabled();

            if (arrayLocation.length > 0) {
                let bool = pointIsInside(ping, arrayLocation);
                console.log("IS INSIDE", bool);
            }

        })([]);
    }, []);

    function pointIsInside(point, objects) {
        let inside = false;
        for (var i = 0; i < objects.length; i++) {
            var object = objects[i];
            if (point.latitude > object.latitude && point.longitude > object.longitude) {
                inside = true;
                return inside;
            }
        }
        inside = false;
        console.log("inside", inside)
        return inside;
    }
    let verify = () => {

            // if (arrayLocation.length != 0) {
            //     console.log("222222222222" + arrayLocation.length);
                
            //     <Polygon coordinates={arrayLocation} fillColor={'rgba(100,200,200,0.3)'} strokeColor="coral" strokeWidth={3} tappable={true} onPress={() => { console.log("PRESS") }} />
            // }
            


    }

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text h1>{arrayLocation.length}</Text>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: ping.latitude,
                        longitude: ping.longitude,
                        latitudeDelta: 0.00922,
                        longitudeDelta: 0.000421,
                    }}
                    showsUserLocation={true}
                    // followsUserLocation={true}
                    onUserLocationChange={(e) => {
                        setPing({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        })
                    }}
                >
                    {verify()}
                    <Marker
                        coordinate={ping}
                        pinColor="linen"
                        draggable={true}
                        onDragStart={(e) => {
                            console.log("DragStart", e.nativeEvent.coordinate)
                        }}
                        onDragEnd={(e) => {
                            console.log("DragEnd", e.nativeEvent.coordinate)

                        }}
                    >
                        <Callout><Text>This is the callout</Text></Callout>
                    </Marker>
                    <Circle center={ping} radius={17}></Circle>
                </MapView>
                <Button title="pointInPolygon" onPress={() => {
                    let bool = pointInPoly(-0.18373, -78.50277, arrayLocation);
                    console.log(bool);
                }} />
                <Button title="pointIsInside" onPress={() => {
                    let bool = pointIsInside(point, arrayLocation);
                    console.log(bool);
                }} />
                <Button
                    title="ACTIVAR"
                    iconContainerStyle={{ marginLeft: 10 }}
                    titleStyle={styles.titleButtons}
                    buttonStyle={commons.actionButton}
                    containerStyle={commons.buttonContent}
                    icon={{
                        name: "location",
                        type: "entypo",
                        size: 15,
                        paddingRight: 10,
                        color: "white",
                    }}
                    onPress={() => {
                        CheckIfLocationEnabled(), GetCurrentLocation();
                    }}
                />
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    map: {
        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').height / 2,
    },
});