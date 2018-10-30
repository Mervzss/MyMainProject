import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import DefaultHeader from '../../NavigationLibFunction/HeaderMenu/MenuDefault'
import Icon from 'react-native-vector-icons/Ionicons'
class RecieveView extends Component{
    static navigationOptions={
        tabBarIcon:({tintColor}) => (
            <Icon name='md-mail' size={25} color='#cb4335'/>
        )
    }
    render(){
        return(
            <View>
                <DefaultHeader navigateIt={()=> this.props.navigation.openDrawer()}/>
                <Text> RecieveView </Text>
                <Button  title="Settings" onPress={()=> this.props.navigation.navigate('Settings')} color="#cb4335"/>
            </View>
        )
    }
}
export default RecieveView;