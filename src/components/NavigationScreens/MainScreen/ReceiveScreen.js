import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

class RecieveView extends Component{
    render(){
        return(
            <View>
                <Text> RecieveView </Text>
                <Button  title="Settings" onPress={()=> this.props.navigation.navigate('Settings')} color="#cb4335"/>
            </View>
        )
    }
}
export default RecieveView;