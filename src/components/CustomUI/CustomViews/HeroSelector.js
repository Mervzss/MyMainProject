import React from 'react'
import {View,Button,Text, StyleSheet, ScrollView} from 'react-native'
import DotaHeroGenerator from '../../DotaLibrary/DotaHeroGenerator/DotaHeroGenerator'
// Custom Text
import MinAppText from '../../CustomUI/CustomTextInput/MinAppText'

const heroSelector = props =>(
    <View style={styles.mainView}>
        <MinAppText> {props.name} </MinAppText>
        <View style={styles.selectImage}>
        <ScrollView>
        <DotaHeroGenerator/>
        </ScrollView>
        </View>
        <View style={styles.buttonView}>
            <Button title="Send" color='#cb4335'{...props} />
        </View>


    </View>
)

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
        borderRadius:5,
        flexDirection:'column'
    },
    buttonView:{
        paddingTop:'8%',
        width:'30%'
    }
})

export default heroSelector;