import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PRODUCTS } from '@/assets/products';
import { ProductListItem } from '../../components/product-list-items';
import ListHeader from '../../components/list-header';
import Auth from '../auth'

const Index = () => {
  return (
    <Auth/>
  //  <View style={styles.container}>
  //    <FlatList
  //      data={PRODUCTS}
  //      renderItem={({ item }) => <ProductListItem product={item} />}
  //      keyExtractor={(item) => item.id.toString()}
  //      numColumns={2}
  //      ListHeaderComponent={ListHeader}
  //      contentContainerStyle={styles.flatListContent}
  //      columnWrapperStyle={styles.flatListColumn}
  //      style={{ paddingHorizontal: 10, paddingVertical: 5 }}
  //    />
  //  </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
});
