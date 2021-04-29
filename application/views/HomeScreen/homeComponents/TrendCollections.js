import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {TrendCollectionCart} from '../../Components/cards';

const TrendCollections = ({navigate}) => {
  const TrendCollectionList = [
    {
      id: 1,
      image: require('../../Assets/images/trendCollection/p1.png'),
      text: 'outwear By Cristian  Scarlato',
    },
    {
      id: 2,
      image: require('../../Assets/images/trendCollection/p2.png'),
      text: 'outwear By Cristian  Scarlato',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TrendCollectionCart
        image={item.image}
        title={item.title}
        navigate={navigate}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text onPress={() => navigate('ProductList')}  style={styles.topText}>trending collections</Text>
        <Icon onPress={() => navigate('ProductList')}  style={styles.topIcon} name={'nav-icon-grid-a'} />
      </View>
      <FlatList
        data={TrendCollectionList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TrendCollections;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    display: 'flex',
    marginBottom: 25,
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
