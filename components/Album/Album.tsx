import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { album } from "../../types";
import { useNavigation } from "@react-navigation/core";
const Album = (props: album) => {

   const navigation = useNavigation() 
  return (
    <TouchableOpacity
      onPress={() => {
        console.warn("album pressed " + props.album.artistsHeadline);
        navigation.navigate('Album',{id: props.id})
    }}
    >
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Album;
