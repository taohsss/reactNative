import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
//import { BottomNavigation } from 'react-native-material-ui';

const ListScreen = () => {
    //build some array of object
    const friends = [
        { name: "friend #1", age: 20 },
        { name: "friend #2", age: 45 },
        { name: "friend #3", age: 50 },
        { name: "friend #4", age: 20 },
        { name: "friend #5", age: 7 },
        { name: "friend #7", age: 20 },
        { name: "friend #8", age: 100 },
    ];
    return (
        <View>
            <FlatList
                //horizontal={true}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(friend) => friend.name}    //keyExtractor
                data={friends}
                renderItem={({ item }) => {
                    // renderItem === {item: {name: "friend #1"}, index:0 }
                    // destructure that item property
                    //item === {name:"friend #1" }
                    return <Text style={styles.textStyle}>
                        {item.name}
                    </Text>
                }}
            />
            <FlatList
                data={friends}
                renderItem={({ item }) => {
                    return <Text>
                        {item.name} -age {item.age}
                    </Text>
                }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        //marginVertical: 50
    }
})

export default ListScreen