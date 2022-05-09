import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { Button } from 'react-native-elements';
import { getLocation } from '../services/MapService';

export const MapScreen = ({navigation}) => {
    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [coordinates, setCoordinates] = React.useState([]);


    const [ping, setPing] = React.useState({
        latitude: -0.2755586,
        longitude: -78.5433207,
    })

    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
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
            console.log('Location', location);
        })();
    }, []);
    React.useEffect(() => {
        if (coordinates.length > 0) {
            canContinue();
        }
    }, [coordinates])
    let canContinue = () => {
        navigation.navigate("POLYGON", { item: coordinates });
    }
    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    const getDirection = (location) => {
        getLocation(refreshScreen, location);

    }
    const refreshScreen = (personRetrieved) => {
        setCoordinates(personRetrieved);
    };
    return (
        <View style={styles.container}>
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
            <Button title="Test La granja" onPress={() => {
                getDirection("La Granja")
            }} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-250,
    },
});