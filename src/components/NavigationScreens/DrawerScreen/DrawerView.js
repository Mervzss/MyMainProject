// React Imports
import React,{ Component } from 'react'
import {View, ScrollView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {createDrawerNavigator,DrawerItems,DrawerNavigator} from 'react-navigation'
// Drawers imports
import MainScreen from './DrawerItems/MainView'
import ProfileScreen from './DrawerItems/ProfileView'
import CreditsScreen from './DrawerItems/CreditsView'
// UI Designs
import DotaLogoImage from '../../../assets/dota2icon.png'
import Icon from 'react-native-vector-icons/Ionicons'
// Tab Test
import Tab from '../TabScreen/TabView'
class drawerView extends Component {
    state={
        logOutPressed:"ypw"
    }

    render() {
      return (<DrawerList name={this.state.logOutPressed}/>);
    }
  }

  const Drawer = props =>(
    <View>
      <View style={{ height: 100, backgroundColor: 'white', alignItems: "center", justifyContent: "center" }}>
        <Image source={DotaLogoImage} style={{ height: 50, width: 50, borderRadius: 40 }} />
        <Text style={{ fontWeight: 'bold', color: 'black' }}> Account: PlaceHolder </Text>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
        <TouchableOpacity >
          <View style={styles.logOutDrawer}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Log Out {props.name} </Text>
            <Icon name="md-log-out" size={20} color="black" />
          </View>
        </TouchableOpacity>

      </ScrollView>

    </View>
  )
  const DrawerList = DrawerNavigator(
    {
    Main: Tab,
    Profile: ProfileScreen,
    Credits: CreditsScreen
    },
    {
        contentComponent:Drawer,
        initialRouteName:'Main'
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
  