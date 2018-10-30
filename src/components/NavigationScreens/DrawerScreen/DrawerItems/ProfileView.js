import React,{Component} from 'react'
import {View,Text,Button,StyleSheet,Image} from 'react-native'

import DotaLogoImage from '../../../../assets/dota2icon.png'
class ProfileView extends Component{
    render(){
        return(
            <View style={styles.parentStyles}>
                <View style={styles.textImageStyle}>
                    <Image source={DotaLogoImage} style={{ height: 75, width: 75, borderRadius: 50 }} />
                    <View>
                        <Text> Account: PlaceHolder </Text>
                    </View>
                </View>
            <View style={styles.manipulateText}>
                <View style={styles.textView}>
                    <Text style={{paddingLeft:0}}> No Likes </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{paddingLeft:0}}> Bad Reputation </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{paddingLeft:0}}> Reckless Life </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{paddingLeft:0, color:'green'}}> Commends: 0 </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{paddingLeft:0, color:'red'}}> Reports: 9669 </Text>
                </View>
            </View>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentStyles:{
        
    flexDirection: 'column',
    flex:1,
    justifyContent: 'flex-start'
    },
    textImageStyle:{
        
        flexDirection:'row',
        width:'100%'
    },
    textView:{
        width:'80%',
        margin: 8,
        borderBottomWidth: 1,
        borderBottomColor:'black',
    },
    manipulateText:{
        alignItems:'flex-end',
        paddingLeft: 20
    }
})

export default ProfileView;