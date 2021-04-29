import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation: {navigate}}) => {
  useEffect(() => {
    redirectPage();
  }, []);

  const redirectPage = () => {
    setTimeout(() => {
      navigate('HomeScreen');
    }, 800);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basics</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 31,
    fontWeight: 'bold',
    color: '#161616',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
});
