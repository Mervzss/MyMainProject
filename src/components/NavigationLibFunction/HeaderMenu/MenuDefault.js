import React,{Component} from 'react'
import {Header,Left,Icon} from 'native-base'
const defaultHeader = props => (
            
    <Header style={[{backgroundColor:'#cb4335'}, props.backgroundColor]}>
        <Left style={{marginRight:'85%'}}>
            <Icon name='menu' color='black' onPress={props.navigateIt} />
        </Left>
    </Header>
            
        )

export default defaultHeader;