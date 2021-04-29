import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const ProductScreen = ({navigation}) => {
  const images = [
    require('../Assets/images/sliders/v1.png'), // Network image
    require('../Assets/images/sliders/v2.png'), // Network image
    require('../Assets/images/sliders/v3.png'), // Network image
  ];

  const redirectPage = () => {};
  return (
    <View>
      <View style={{position: 'relative'}}>
        <SliderBox
          images={images}
          sliderBoxHeight={Dimensions.get('screen').height / 1.8}
        />
        <View style={{position: 'absolute', flexDirection: 'row'}}>
          <Icon
            onPress={() => navigation.goBack()}
            name="back"
            style={{color: 'white', fontSize: 26, margin: 10, flex: 1}}
          />

          <Ionicons
            name="share-outline"
            style={{color: 'white', fontSize: 26, margin: 10}}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>oversized Denim Jacket</Text>
          <Text style={styles.price}>$67.90</Text>
        </View>
        <Text style={styles.description}>DESCRIPTION</Text>
        <Text>
          Straight cut shirt jacket in sturdy, washed denim. Features a pointed
          collar and buttons down the front. Dropped shoulders and long sleeves
          with button cuffs. Detachable tie belt at the waist and a rounded hem.
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={redirectPage} style={styles.buttonOutline}>
            <Icon name="hearto" style={styles.buttonIconOutline} />
            <Text style={styles.buttonOutlineText}>wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={redirectPage} style={styles.button}>
            <SimpleLineIcons style={styles.buttonIcon} name="handbag" />

            <Text style={styles.buttonText}>Add to bag</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: '#171717',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    flex: 1,
    margin: 'auto',
  },
  price: {
    color: '#171717',
    fontSize: 23,
    textAlign: 'right',
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    flex: 1,
    margin: 'auto',
  },
  description: {
    color: '#171717',
    marginTop: 20,
    margin: 'auto',
    fontWeight: '800',
    fontSize: 18,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  altDescription: {
    color: '#575757',
    textTransform: 'capitalize',
    letterSpacing: 2,
    fontSize: 17,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#161616',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    flex: 1,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    justifyContent: 'center',
    flex: 1,
  },
  buttonOutline: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    borderWidth: 1,
    margin: 5,
    flexDirection: 'row',
    textAlign: 'center',
  },
  buttonOutlineText: {
    color: 'black',
    textTransform: 'uppercase',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    justifyContent: 'center',
    flex: 1,
  },
  buttonIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    left: 14,
  },
  buttonIconOutline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161616',
    justifyContent: 'center',
    alignSelf: 'center',
    left: 14,
  },
});
