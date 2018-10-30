import React,{Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

//Custom Components
import DefaultHeader from '../../NavigationLibFunction/HeaderMenu/MenuDefault'
import HeroSelector from '../../CustomUI/CustomViews/HeroSelector'

//Icon Import
import Icon from 'react-native-vector-icons/Ionicons'

class SendView extends Component{
    static navigationOptions={
        tabBarIcon:({tintColor}) => (
            <Icon name='md-send' size={25} color='#cb4335'/>
        )
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F8E0F7'}}>
                <DefaultHeader navigateIt={() => this.props.navigation.openDrawer()} />
                <HeroSelector
                name='Select Your Hero'
                onPress={()=> alert('sad')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView:{
        paddingTop:'10%',
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    selectImage:{
        width:'90%',
        height:200,
        backgroundColor:'#F6CEEC',
        borderColor:'black',
        borderWidth:1,
        borderRadius:5
    },
    buttonView:{
        paddingTop:'8%',
        width:'30%'
    }
})
export default SendView;