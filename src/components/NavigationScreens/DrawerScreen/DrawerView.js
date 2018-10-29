// React Imports
import React,{ Component } from 'react'
import {View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import {createDrawerNavigator,DrawerItems} from 'react-navigation'
// Drawers imports
import SendScreen from '../MainScreen/SendScreen'
import ProfileScreen from '../DrawerScreen/DrawerItems.js/ProfileView'
// UI Designs
import DotaLogoImage from '../../../assets/dota2icon.png'
import Icon from 'react-native-vector-icons/Ionicons'
import wow from '../../../assets/dt.jpg'

class drawerView extends Component {
    state={
        logOutPressed:"ypw"
    }

    render() {
      return (<DrawerList name={this.state.logOutPressed}/>);
    }
  }

  const Drawer = props =>(
      <ImageBackground source={wow} style={{flex:1, width:"100%", height:"100%"}}>
      <View>
    <View style={{  backgroundColor: 'white', alignItems: "center", justifyContent: "center" }}>
    {/* <Image source={DotaLogoImage} style={{ height: 50, width: 50, borderRadius: 40 }} /> */}
  </View>
    <ScrollView>
    <DrawerItems {...props} />
    <TouchableOpacity >
    <View style={styles.logOutDrawer}>
          <Text style={{fontWeight:'bold', color:'white'}}>Log Out {props.name} </Text>
          <Icon name="md-log-out" size={20} color="black"/>
      </View>
    </TouchableOpacity>
    
      </ScrollView>
      
  </View>
  </ImageBackground>
  )
  const DrawerList = createDrawerNavigator(
    {
    Home:SendScreen,
    Profile: ProfileScreen
    },
    {
        contentComponent:Drawer,
        initialRouteName:'Home'
    }
  )

  const styles = StyleSheet.create({
    logOutDrawer:{  
        
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
      
        padding:15
        
    },
  });
  export default drawerView
  