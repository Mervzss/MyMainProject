import SendScreen from '../MainScreen/SendScreen'
import RecieveScreen from '../MainScreen/ReceiveScreen'
import {createBottomTabNavigator} from 'react-navigation'
 const DefaultMainScreen = createBottomTabNavigator(
    {
    Send: SendScreen,
    Receive: RecieveScreen
    },
    {
      swipeEnabled:false,
      initialRouteName:'Send'
    }
  )
  export default DefaultMainScreen