import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { album } from '../../types'
import Album from '../Album/Album'
import styles from './styles'
export type AlbumCategoryProps = {
    title: string;
    albums: [album]
}
const AlbumCategory = (props:AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
                data={props.albums}
                renderItem={({item})=>{
                    console.log(item)
                   return <Album album={item}/>
                }}
                keyExtractor={(item)=>item.id}
                horizontal
            />
        </View>
    )
}

export default AlbumCategory
