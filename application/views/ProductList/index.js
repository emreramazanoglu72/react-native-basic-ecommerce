import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProductCardV2} from '../Components/cards';
import Header from '../Components/layout/Header';
import SearchBar from './components/SearchBar';
import TagButton from './components/TagButton';

const ProductList = ({navigation: {navigate}}) => {
  const tagList = ['All', 'Tops', 'Sweatshirts', 'Jackets', 'Pants'];
  const productList = [
    {
      id: 1,
      image: require('../Assets/images/products/p1.png'),
      title: 'Ribbed polo-Neck Jumper',
      altText: 'Jack & James',
      price: '$39.90',
    },
    {
      id: 2,
      image: require('../Assets/images/products/p2.png'),
      title: 'oversized Shirt Jacket',
      altText: 'Jack & James',
      price: '$79.90',
    },
    {
      id: 3,
      image: require('../Assets/images/products/p3.png'),
      title: 'White Cotton Tshirt',
      altText: 'Jack & James',
      price: '$39.90',
    },
    {
      id: 4,
      image: require('../Assets/images/products/p4.png'),
      title: 'Light Blue Tshirt',
      altText: 'Jack & James',
      price: '$79.90',
    },
  ];
  const renderTags = ({item}) => {
    return <TagButton text={item} />;
  };

  const renderCards = ({item}) => {
    return (
      <ProductCardV2
        image={item.image}
        title={item.title}
        altText={item.altText}
        price={item.price}
        navigate={navigate}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header navigate={navigate} />
      <ScrollView style={{padding: 20}}>
        <SearchBar />

        <FlatList
          data={tagList}
          renderItem={renderTags}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 10,
            marginBottom: 30,
          }}>
          <Text
            style={{
              color: '#6C6C6C',
              fontSize: 18,
              flex: 1,
              textTransform: 'capitalize',
            }}>
            search results for{' '}
            <Text style={{fontWeight: 'bold'}}>“jackets”</Text>
          </Text>
          <Text style={{color: '#6C6C6C', fontSize: 15}}>15 Results</Text>
        </View>
        {/* ProductCardV2 */}
        <FlatList
          data={productList}
          renderItem={renderCards}
          keyExtractor={item => item.id}
          scrollEnabled={true}
        />
      </ScrollView>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
