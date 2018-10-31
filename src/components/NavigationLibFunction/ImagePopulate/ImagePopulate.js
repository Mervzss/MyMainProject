import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import abbadonImage from "../../../assets/DotaHeroIcons/abbadon.png"
import KotlImage from '../../../assets/DotaHeroIcons/kotl.png'
import ShadowFiendImage from '../../../assets/DotaHeroIcons/shadowfiend.png'



const imagePopulate = props =>{
    const holdPopulate = ()=>{
        for(var x=0,inc=0;x<= 4; x++,inc++){
   return (
        <View style={styles.viewContainer}>
        <View style={styles.viewTouchStyle}>
            <Image source={props.imageData[x+inc].image} style={styles.imageStyle} />
        </View>
        <View style={styles.viewTouchStyle}>
            <Image source={props.imageData[x+inc+1].image} style={styles.imageStyle} />
        </View>
        </View>
    )
}
  }
    // const holdPopulate = props.imageData.map((value,index)=> {
    //     inc++
    //     return (

    //           <Text key={index}>{props.imageData.length}</Text>
    //         )
            
            
    //     })

    return(<View>{
        holdPopulate()
    }</View>) 

}

const styles = StyleSheet.create({
    viewContainer:{
        flexDirection:'row',
        width:'100%'
    },
    viewTouchStyle:{
        width:'50%',
        borderColor:'black',
        borderWidth: 2
    },
    imageStyle:{
        width:"100%",
        height:50,
        borderWidth:2,
        borderColort:'black'
      
    },
})
export default imagePopulate;
