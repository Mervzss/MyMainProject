import React from 'react'
import { Text,StyleSheet } from "react-native";

const defaultAppText = props =>(
        <Text style={styles.text}>{props.children}</Text>
    
    
)

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontSize: 30,
        color:"#fadbd8",
        textShadowRadius: 5,
        textShadowColor:'black',
        textShadowOffset:{
            width: 4,
            height: 3
        }
        
    }
})

export default defaultAppText;