import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const WelcomeScreen = ({navigation: {navigate}}) => {
  const images = [
    require('../Assets/images/sliders/v1.png'), // Network image
    require('../Assets/images/sliders/v2.png'), // Network image
    require('../Assets/images/sliders/v3.png'), // Network image
  ];

  const redirectPage = () => {
    navigate('HomeScreen');
  };

  return (
    <View>
      <SliderBox
        images={images}
        sliderBoxHeight={Dimensions.get('screen').height / 1.8}
      />
      <View style={styles.container}>
        <Text style={styles.text}>for the minimalists</Text>
        <Text style={styles.textAlt}>
          Matching Simplicity and comfort for your daily basic needs
        </Text>
        <TouchableOpacity onPress={redirectPage} style={styles.button}>
          <Text style={styles.buttonText}>register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={redirectPage} style={styles.buttonOutline}>
          <Text style={styles.buttonOutlineText}>Log IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: '#171717',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
    margin: 'auto',
  },
  textAlt: {
    color: '#171717',
    textAlign: 'center',
    marginTop: 10,
    margin: 'auto',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#161616',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ECECEC',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
  },
  buttonOutline: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
  },
});

export default WelcomeScreen;
