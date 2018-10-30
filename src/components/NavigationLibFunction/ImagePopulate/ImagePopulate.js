import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import sf from '../../../assets/DotaHeroIcons/shadowfiend.png'
const imagePopulate = props =>{
    const holdPopulate = props.imageData.map((value,index)=>
    (
            //   <Image source={value.image} style={styles.imageStyle} key={index}/>
              <Text key={index}>{sf}</Text>
            
    ))
    return(
        
           <View>
           {holdPopulate}
           </View>
        
    ) 

}
const styles = StyleSheet.create({
    imageStyle:{
        width:'30%',
        height:'20%'
    },
})
export default imagePopulate;
