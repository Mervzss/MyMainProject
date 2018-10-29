import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

class GeneralSettingsView extends Component{
    render(){
        return(
            <View>
                <Text> GeneralSettings </Text>
                <Button title="send" onPress={()=> this.props.navigation.navigate('Second')}/>
            </View>
        )
    }
}
export default GeneralSettingsView;