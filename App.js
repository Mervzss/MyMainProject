
// Main Import
import React, { Component } from 'react';
import {createSwitchNavigator,createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from "react-navigation"

// Login imports
import AuthScreen from './src/components/NavigationScreens/AuthScreen/AuthView'
import CreateScreen from './src/components/NavigationScreens/AuthScreen/CreateView'

// Content imports
import SendScreen from './src/components/NavigationScreens/MainScreen/SendScreen'
import RecieveScreen from './src/components/NavigationScreens/MainScreen/ReceiveScreen'

// Solutionized the Warnings
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// General Settings
import GeneralSettingsScreen from './src/components/NavigationScreens/GeneralSettingsScreen/GeneralSettingsView'

// Drawer
import DrawerScreen from './src/components/NavigationScreens/DrawerScreen/DrawerView'
export default class App extends Component {
  render() {
    return (
      <SwitchingScreens/>
    );
  }
}

// Tab Navigator (SendScreen, ReceiveScreen)
const DefaultMainScreen = createBottomTabNavigator(
  {
  First: DrawerScreen,
  Second: RecieveScreen
  },
  {
    swipeEnabled:false,
    initialRouteName:'First'
  }
)
// Log/Auth Navigator (AuthScreen, CreateScreen)
const LogScreen = createStackNavigator({
  Log:AuthScreen,
  Create:CreateScreen
})

// SwitchScreens
const SwitchingScreens = createSwitchNavigator(
  {
  Auth:LogScreen,
  Main: DefaultMainScreen,
  Settings:GeneralSettingsScreen
  },
  {
    initialRouteName:'Auth'
  }
)


