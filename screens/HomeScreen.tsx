import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import AlbumCategory from "../components/AlbumCategory/AlbumCategory";
import { RootTabScreenProps } from "../types";
import albumCategories from "../data/albumCategories";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <AlbumCategory title={item.title} albums={item.albums} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
