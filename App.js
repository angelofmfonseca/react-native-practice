import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

const App = () => {
  const [itemsList, setItemsList] = useState([]);

  const handleAddItens = itemTitle => {
    setItemsList(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), value: itemTitle } // FlatList expects an array of objects
    ]);
  };

  const handleRemoveItem = itemId => {
    setItemsList(currentItems => {
      return currentItems.filter(item => item.id !== itemId);
    });
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Shop List</Text>
      <ListInput handleAddItens={handleAddItens} />
      <FlatList
        keyExtractor={item => item.id}
        data={itemsList} // FlatList expects an array of objects
        renderItem={itemData => (
          <ListItem
            id={itemData.item.id}
            itemData={itemData.item.value}
            handleRemoveItem={handleRemoveItem}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30
  }
});

export default App;
