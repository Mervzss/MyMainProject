import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

class ProfileView extends Component{
    render(){
        return(
            <View>
                <Text> Profile View </Text>
                <Button  title="Settings" onPress={()=> alert('MUKA KANG PALAKA')} color="#cb4335"/>
            </View>
        )
    }
}
export default ProfileView;