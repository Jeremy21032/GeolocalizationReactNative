import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MapScreen } from './app/screens/MapScreen';
import { MapPolygon } from './app/screens/MapPolygon';
import { loadFirebaseConfiguration } from './app/util/FirebaseConfiguration';
import { ShareScreen } from './app/screens/ShareScreen';
import { BadgesScreen } from './app/screens/BadgesScreen';
// import { Icon } from 'react-native-elements';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Foundation from "react-native-vector-icons/Foundation"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

const BottomNav = createBottomTabNavigator();
global.cedula="1723563233";
let RootNav = () => {
  return (
    <BottomNav.Navigator initialRouteName='BADGES'>
      <BottomNav.Screen
        name="MAP"
        component={MapScreen}
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="map" color={color} size={size} />
          ),
        }}
      />
      <BottomNav.Screen
        name="POLYGON"
        component={MapPolygon}
        options={{
          tabBarLabel: 'Mapa con poligono',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <BottomNav.Screen
        name="SHARE"
        component={ShareScreen}
        options={{
          tabBarLabel: 'Sharing',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="share-google" color={color} size={size} />
          ),
        }}
      />
      <BottomNav.Screen
        name="BADGES"
        component={BadgesScreen}
        options={{
          tabBarLabel: 'Insignias',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="badge" color={color} size={size} />
          ),
        }}
      />

    </BottomNav.Navigator>
  )
}
export default function App() {
  loadFirebaseConfiguration();
  LogBox.ignoreLogs(['Warning:...', 'Setting']); // ignore specific logs

  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
