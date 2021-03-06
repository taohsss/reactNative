import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const BottomNav = ({ navigation }) => {
    //console.log(props.navigation)
    return <View>
        <Text >Healthy Point</Text>
        {/* <Button
            onPress={() => { navigation.navigate("Components") }}
            title="Home" /> */}
        {/* <Button
            onPress={() => { navigation.navigate("Photos") }}
            title="Photos"
        /> */}
        <Button
            onPress={() => { navigation.navigate("List") }}
            title="Scan"
        />
        {/* <Button
            onPress={() => { navigation.navigate("List") }}
            title="History"
        />
        <Button
            onPress={() => { navigation.navigate("List") }}
            title="User"
        /> */}
    </View>
};

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 30
//     }
// });

export default BottomNav;
