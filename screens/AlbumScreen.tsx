import { useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { FlatList,StyleSheet, Text, View } from "react-native";
import albumDetails from "../data/albumDetails";
import AlbumHeader from "../components/AlbumHeader/AlbumHeader";
import SongListItem from "../components/SongListItem/SongListItem";
const AlbumScreen = (props) => {

  return (
    <View>
        <FlatList
            data={albumDetails.songs}
            renderItem={({item})=>{
                return <SongListItem song={item}/>
            }}
            keyExtractor={(item)=>item.id}
            ListHeaderComponent={()=><AlbumHeader album={albumDetails}/>}
        />
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({});
