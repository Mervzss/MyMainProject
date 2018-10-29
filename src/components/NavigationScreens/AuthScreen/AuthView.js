import React,{Component} from 'react'
import {View,Text,StyleSheet,Button,ImageBackground} from 'react-native'
import DefaultAppInput from "../../CustomUI/CustomTextInput/DefaultAppInput"
import DefaultAppText from "../../CustomUI/CustomTextInput/DefaultAppText"
import myDotaBackground from '../../../assets/mysecondDotaBackground.jpg'
class AuthView extends Component{
    state={
        name:'',
        pass:''
    }
    static navigationOptions={
        header: null
    }

    changeName = (val)=>{
        this.setState({
            name:val
        })
    }
    changePass = (val)=>{
        this.setState({
            pass:val
        })
    }
    render(){
        return(
            <ImageBackground source={myDotaBackground} style={styles.mybgStyle}>
            <View style={styles.mainContainer}>
                <DefaultAppText>DotaAuthenticator</DefaultAppText>
                <DefaultAppInput placeholder="Enter Name" value={this.state.name} onChangeText={val => this.changeName(val)} />
                <DefaultAppInput placeholder="Enter Pass" value={this.state.pass} onChangeText={val => this.changePass(val)} />
                <View style={styles.buttonStyles}>
                <Button title="Log in" 
                    onPress={()=> this.props.navigation.navigate('Main',{
                        getName:this.state.name,
                        getPass:this.state.pass
                    })} 
                    color="#76448a"/>
                </View >
                <View style={styles.buttonStyles}>
                <Button  title="Create" onPress={()=> this.props.navigation.navigate('Create')} color="#cb4335"/>
                </View >
                
            </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer:{  
        alignItems:"center",
        justifyContent:'center',
        flex:1,
    },
    buttonStyles: {
      marginBottom: 12,
      width: "25%",
      marginLeft:225
    },
    mybgStyle:{
        width:'100%',
        height:'100%',
        flex:1
    }
  });

export default AuthView;