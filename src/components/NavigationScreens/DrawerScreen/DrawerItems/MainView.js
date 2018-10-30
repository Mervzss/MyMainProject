import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import {Header,Left,Icon} from 'native-base'
class MainView extends Component{
    render(){
        return(
            <View>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
                <Text> Main View </Text>
                <Button  title="Settings" onPress={()=> alert('MUKA KANG PALAKA')} color="#cb4335"/>
            </View>
        )
    }
}
export default MainView;