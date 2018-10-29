import React from 'react'
import { TextInput,StyleSheet } from "react-native";

const defaultAppInput = props =>(
    <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={styles.input}
    />
)

const styles = StyleSheet.create({
    input:{
        width: "90%",
        padding: 5,
        margin: 10,
        borderWidth:2,
        borderColor:"#34495e",
        borderRadius: 5,
        backgroundColor: 'white'
    }
})

export default defaultAppInput;