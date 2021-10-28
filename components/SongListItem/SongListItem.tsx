import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";
import { song } from "../../types";
export type SongListItemProps = {
  song: song;
};
const SongListItem = (props: SongListItemProps) => {
  const { song } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.songInfo}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </View>
  );
};

export default SongListItem;
