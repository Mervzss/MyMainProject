import React from 'react'
import { Text,StyleSheet } from "react-native";

const minAppText = props =>(
        <Text style={styles.text}>{props.children}</Text>
    
    
)

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        color:"#8A084B",
    
    }
})

export default minAppText;