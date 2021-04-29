import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {CategoriesCart} from '../../Components/cards';

const Categoires = ({navigate}) => {
  //CategoriesCart
  const categoriesCardList = [
    {
      id: 1,
      image: require('../../Assets/images/categories/p1.png'),
      text: 'New',
    },
    {
      id: 2,
      image: require('../../Assets/images/categories/p2.png'),
      text: 'Tops',
    },
    {
      id: 3,
      image: require('../../Assets/images/categories/p3.png'),
      text: 'JACKETS',
    },
    {
      id: 4,
      image: require('../../Assets/images/categories/p4.png'),
      text: 'PANTS',
    },
  ];
  const renderItem = ({item}) => {
    return <CategoriesCart image={item.image} text={item.text} />;
  };
  return (
    <View>
      <View style={styles.topRow}>
        <Text onPress={() => navigate('ProductList')} style={styles.topText}>
          Categoires
        </Text>
        <Icon
          onPress={() => navigate('ProductList')}
          style={styles.topIcon}
          name={'nav-icon-grid-a'}
        />
      </View>

      <FlatList
        data={categoriesCardList}
        renderItem={renderItem}
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

export default Categoires;
