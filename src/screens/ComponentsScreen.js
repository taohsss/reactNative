import React from "react"
import { Text, StyleSheet, View } from "react-native"

const ComponentsScreen = () => {
    const greeting = "Hi bitch"
    const name = "Amanda"
    return <View>
        <Text style={styles.textStyle} >
            This is the component screen.</Text>
        <Text>{greeting}</Text>
        <Text style={styles.textStyle}>"getting started with React Native"</Text>
        <Text>"My name is {name}."</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
})
export default ComponentsScreen