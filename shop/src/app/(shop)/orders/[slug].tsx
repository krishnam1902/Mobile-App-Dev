import { FlatList, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { ORDERS } from '@/assets/orders';

const OrderDetails = () => {
  const { slug } = useLocalSearchParams();
  const order = ORDERS.find(order => order.slug === slug);

  if (!order) return <Redirect href={'/(shop)'} />

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: `${order.slug}` }} />

      <Text style={styles.item}>{order.slug}</Text>
      <Text style={styles.details}>{order.details}</Text>

      <View style={[styles.statusBadge, styles[`statusBadge_${order.status}`]]}>
        <Text style={styles.statusText}>{order.status}</Text>
      </View>

      <Text style={styles.date}>Ordered on: {order.date}</Text>

      <Text style={styles.itemsTitle}>Items Ordered:</Text>
      <FlatList
        data={order.items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Image source={item.heroImage} style={styles.heroImage} resizeMode="cover" />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemPrice}>Price: ${item.price}</Text>
            </View>
          </View>
        )}
        scrollEnabled={false}
      />
    </ScrollView>
  )
}

export default OrderDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  item: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  statusBadge_Pending: {
    backgroundColor: 'orange',
  },
  statusBadge_Completed: {
    backgroundColor: 'green',
  },
  statusBadge_Shipped: {
    backgroundColor: 'blue',
  },
  statusBadge_InTransit: {
    backgroundColor: 'purple',
  },
  statusText: {
    color: '#fff',
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  itemsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  orderItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  heroImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
