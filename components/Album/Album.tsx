import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import styles from './styles'
import { album } from '../../types'
const Album = (props:album) => {
    
    return (
        <View style={styles.container}>
            <Image source={{uri:props.album.imageUri}} style={styles.image}/>
            <Text style={styles.text}>{props.album.artistsHeadline}</Text>
        </View>
    )
}

export default Album

