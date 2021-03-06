import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const User = () => {
    return <View>
        <Text style={styles.textStyle} >
            This is the User area</Text>
    </View>
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
})
export default User