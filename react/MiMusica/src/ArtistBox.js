import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Image
 } from 'react-native'

 export default class ArtistBox extends Component<Props> {

    render(){
        const {image, name} = this.props.ArtistBox
        return(
            <View style = {styles.artistBox}>
                <Image style = {styles.image} source = {{uri: image}} />
                <View style = {styles.info}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
        )
    }
 }