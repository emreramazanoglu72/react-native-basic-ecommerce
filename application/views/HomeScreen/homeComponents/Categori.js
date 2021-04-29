import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {ProductCard} from '../../Components/cards';

const Categori = ({navigate}) => {
  const productList = [
    {
      id: 1,
      image: require('../../Assets/images/products/p1.png'),
      title: 'Ribbed polo-Neck Jumper',
      altText: 'Jack & James',
      price: '$39.90',
    },
    {
      id: 2,
      image: require('../../Assets/images/products/p2.png'),
      title: 'oversized Shirt Jacket',
      altText: 'Jack & James',
      price: '$79.90',
    },
    {
      id: 3,
      image: require('../../Assets/images/products/p3.png'),
      title: 'White Cotton Tshirt',
      altText: 'Jack & James',
      price: '$39.90',
    },
    {
      id: 4,
      image: require('../../Assets/images/products/p4.png'),
      title: 'Light Blue Tshirt',
      altText: 'Jack & James',
      price: '$79.90',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <ProductCard
        image={item.image}
        title={item.title}
        altText={item.altText}
        price={item.price}
        navigate={navigate}
      />
    );
  };

  const renderItem2 = ({item}) => {
    return (
      <ProductCard
        image={item.image}
        title={item.title}
        altText={item.altText}
        price={item.price}
        bigImage={true}
        navigate={navigate}
      />
    );
  };
  return (
    <View>
      <View style={styles.topRow}>
        <Text onPress={() => navigate('ProductList')}  style={styles.topText}>twenty21</Text>
        <Icon onPress={() => navigate('ProductList')}  style={styles.topIcon} name={'angle-right'} />
      </View>
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.topRow}>
        <Text onPress={() => navigate('ProductList')}  style={styles.topText}>spring essentials</Text>
        <Icon onPress={() => navigate('ProductList')}  style={styles.topIcon} name={'angle-right'} />
      </View>
      <FlatList
        data={productList.slice(1, 3)}
        renderItem={renderItem2}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    display: 'flex',
    marginBottom: 25,
    marginTop: 25,
  },
  topText: {
    flex: 1,
    color: '#171717',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
    fontSize: 22,
  },
  topIcon: {
    color: '#161616',
    fontSize: 22,
  },
});

export default Categori;
