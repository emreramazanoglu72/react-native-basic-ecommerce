import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/AntDesign';

const CategoriesCart = ({image, text}) => {
  return (
    <View style={categoriesCartStyles.cart}>
      <Image source={image} style={categoriesCartStyles.cartImage} />
      <Text style={categoriesCartStyles.text}>{text}</Text>
    </View>
  );
};

const categoriesCartStyles = StyleSheet.create({
  cart: {
    borderRadius: 100,
    elevation: 3,
    margin: 5,
    backgroundColor: 'transparent',
  },
  cartImage: {
    height: 89,
    width: 89,
    opacity: 0.8,
    position: 'relative',
  },
  text: {
    position: 'absolute',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 'auto',
    alignSelf: 'center',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    marginTop: 40,
  },
});

const TrendCollectionCart = ({image, text}) => {
  return (
    <View style={trendCollectionCartStyles.cart}>
      <Image source={image} style={trendCollectionCartStyles.cartImage} />
      <View style={trendCollectionCartStyles.view}>
        <Text style={trendCollectionCartStyles.text}>
          outwear By Cristian Scarlato
        </Text>
      </View>
    </View>
  );
};

const trendCollectionCartStyles = StyleSheet.create({
  cart: {
    borderRadius: 100,
    elevation: 3,
    margin: 5,
    backgroundColor: 'transparent',
  },
  cartImage: {
    height: 439,
    position: 'relative',
  },
  text: {
    color: '#FFFFFF',
    textTransform: 'capitalize',
    fontSize: 40,
    width: 272,
  },
  view: {
    position: 'absolute',
    bottom: 10,
    left: 15,
  },
});

const ProductCard = ({
  image,
  title,
  altText,
  price,
  bigImage = false,
  navigate,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('ProductScreen')}
      style={ProductCardStyles.card}>
      <FastImage
        source={image}
        style={bigImage ? ProductCardStyles.bigImage : ProductCardStyles.image}
      />
      <Text style={ProductCardStyles.title}>{title}</Text>
      <Text>{altText}</Text>
      <Text>{price}</Text>
    </TouchableOpacity>
  );
};

const ProductCardStyles = StyleSheet.create({
  card: {marginRight: 5},
  image: {
    height: 171,
    width: 172,
    borderRadius: 5,
  },
  bigImage: {height: 216, width: 217, borderRadius: 5},

  title: {
    color: '#171717',
    fontSize: 16,
    width: 172,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
  altText: {
    color: '#979797',
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
  price: {
    color: '#171717',
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
});

const ProductCardV2 = ({
  image,
  title,
  altText,
  price,
  bigImage = false,
  navigate,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('ProductScreen')}
      style={ProductCardV2Styles.card}>
      <FastImage source={image} style={ProductCardV2Styles.image} />
      <View style={ProductCardV2Styles.view}>
        <Text style={ProductCardV2Styles.title}>{title}</Text>
        <Text>{altText}</Text>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 10,
            marginRight: 10,
          }}>
          <Text style={{flex: 1}}>{price}</Text>
          <TouchableOpacity
            style={{borderWidth: 1, borderRadius: 100, borderColor: '#AAAAAA'}}>
            <Icon name="hearto" style={{padding: 5,color:'black',fontSize:14}} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ProductCardV2Styles = StyleSheet.create({
  card: {
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#979797',
    position: 'relative',
  },
  image: {
    height: 110,
    width: 126,
  },
  view: {
    marginLeft: 5,
    marginTop: 10,
    flex: 1,
  },
  title: {
    color: '#171717',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
  altText: {
    color: '#979797',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
  price: {
    color: '#171717',
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
});

const CampaningCard = ({image, text, date}) => {
  return (
    <View>
      <FastImage source={image} style={CampaningCardStyles.image} />
      <View style={CampaningCardStyles.View}>
        <Text style={CampaningCardStyles.Text}>{text}</Text>
        <Text style={CampaningCardStyles.Date}>{date}</Text>
      </View>
    </View>
  );
};

const CampaningCardStyles = StyleSheet.create({
  image: {
    height: 105,
    position: 'relative',
    borderRadius: 10,
  },
  View: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  Date: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
export {
  CategoriesCart,
  TrendCollectionCart,
  ProductCard,
  CampaningCard,
  ProductCardV2,
};
