import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import ListProduct from "../components/ListProduct";

const ProductScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}></View>
      <ListProduct />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductScreen;
