import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import heroData from './BaseHeroes'
import ImagePopulate from '../../NavigationLibFunction/ImagePopulate/ImagePopulate'
class dotaHeroGenerator extends Component{
    state={
        dotaData:heroData.Hero,
        myarray:['yes','no'],
    }
    render(){
        return( <ImagePopulate imageData={this.state.dotaData}/>)
    }
}

const styles = StyleSheet.create({
    
})

export default dotaHeroGenerator;