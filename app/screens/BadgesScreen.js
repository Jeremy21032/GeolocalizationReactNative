import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Image } from 'react-native-elements'
import { assginBadge, consultBadges, getArrBadge, getBadges, getPersonalBadges } from '../services/BadgeService'

export const BadgesScreen = () => {
    const [badges, setBadges] = React.useState([]);
    const [consultBadgesArr, setConsultBadgesArr] = React.useState([]);

    React.useEffect(() => {
        //getBadges(refreshBadges2);
        consultBadges(refreshBadges);

    }, [])

    const refreshBadges = (badgeRetrieved) => {
        // setBadges(badgeRetrieved);
        setConsultBadgesArr(badgeRetrieved);
    }
    const refreshBadges2 = (badgeRetrieved) => {
        setBadges(badgeRetrieved);
        //setConsultBadgesArr(badgeRetrieved);
    }

    return (
        <View>
            <Text>BadgesScreen</Text>
            <Text>{badges.length}</Text>
            <Text>{consultBadgesArr.length}</Text>
            <ScrollView horizontal={true}>
                <FlatList
                    data={badges}
                    numColumns="5"
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { console.log(item.id) }} style={{ backgroundColor: 'red', margin: 30 }}>
                            <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
                        </TouchableOpacity>

                    )}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
            <Button title="Asignar insignia" onPress={() => {
                assginBadge("01I");
            }} />
            <Button title=" insignia" onPress={() => {
getPersonalBadges()     }} />

            <ScrollView horizontal={true}>
                <FlatList
                    data={badges}
                    numColumns="5"
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { console.log(item.id) }} style={{ backgroundColor: 'red', margin: 30 }}>
                            <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
                        </TouchableOpacity>

                    )}
                    keyExtractor={item => item.id}
                />
            </ScrollView>


        </View>
    )
}


const styles = StyleSheet.create({})