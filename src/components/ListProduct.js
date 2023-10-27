import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const dataProduct = [
  {
    id: 1,
    name: "Product 1",
    price: 10000,
    description: "Description 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20000,
    description: "Description 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30000,
    description: "Description 3",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40000,
    description: "Description 4",
  },
  {
    id: 5,
    name: "Product 5",
    price: 50000,
    description: "Description 5",
  },
  {
    id: 6,
    name: "Product 5",
    price: 50000,
    description: "Description 5",
  },
  {
    id: 7,
    name: "Product 5",
    price: 50000,
    description: "Description 5",
  },
  {
    id: 8,
    name: "Product 5",
    price: 50000,
    description: "Description 5",
  },
];

const ListProduct = () => {
  return (
    <View style={styles.container}>
      {dataProduct.map((product) => (
        <Card key={product.id} title={product.name}>
          <View>
            <Text>Price: {product.price}</Text>
            <Text>Description: {product.description}</Text>
          </View>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListProduct;
