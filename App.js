import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MapScreen } from './app/screens/MapScreen';


const BottomNav = createBottomTabNavigator();

let RootNav = () => {
  return (
    <BottomNav.Navigator initialRouteName='MAP'>
      <BottomNav.Screen name="MAP" component={MapScreen} />
    </BottomNav.Navigator>
  )
}
export default function App() {
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
