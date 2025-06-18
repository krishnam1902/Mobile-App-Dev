import { Pressable, Image, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { Product } from '@/assets/types/product';

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link asChild href={`/product/${product.slug}`}>
  <Pressable style={styles.item}>
    <View style={styles.itemImageContainer}>
      <Image source={product.heroImage} style={styles.itemImage} />
    </View>
    <View style={styles.itemTextContainer}>
      <Text style={styles.itemTitle}>{product.title}</Text>
      <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
    </View>
  </Pressable>
</Link>

  ); 
};

const styles = StyleSheet.create({
  item: {
    width: '48%',
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  itemImageContainer: {
    width: '100%',
    height: 160,
    overflow: 'hidden',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemTextContainer: {
    padding: 10,
    backgroundColor: '#fff',
    gap: 4,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1BC464',
  },
});
