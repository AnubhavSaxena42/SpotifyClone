import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";
import { song } from "../../types";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
const PlayerWidget = () => {
  const song = {
    id: "1",
    imageUri:
      "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
    title: "Pajn",
    artist: "Anni",
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.infoIconWrapper}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{song.title}.</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={25} color="white" />
          <FontAwesome name="play" size={25} color="white" />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
