import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const Scan = () => {
    return <View>
        <Text style={styles.textStyle} >
            This is the Scan area</Text>
    </View>
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
})
export default Scan