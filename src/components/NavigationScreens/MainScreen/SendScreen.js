import React,{Component} from 'react'
import {View,Text,Button,ImageBackground} from 'react-native'

class SendView extends Component{
    render(){

        return(
            <View>
                <Text> SendView </Text>
                <Button title="send" onPress={()=> alert('Hi po')}/>
            </View>
        )
    }
}
export default SendView;