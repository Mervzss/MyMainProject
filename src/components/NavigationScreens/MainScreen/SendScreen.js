import React,{Component} from 'react'
import {View,Text,Button,ImageBackground} from 'react-native'
import sendBg from ' ../../../assets/ww.jpg'
class SendView extends Component{
    render(){

        return(
            <ImageBackground source={sendBg} style={{flex:1, width:"100%", height:"100%"}}>
            <View>
                <Text> SendView </Text>
                <Button title="send" onPress={()=> alert('Hi po')}/>
            </View>
            </ImageBackground>
        )
    }
}
export default SendView;