import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Header = ({navigate}) => {
  return (
    <View style={styles.headerContainer}>
      <Icon
        onPress={() => navigate && navigate('HomeScreen')}
        style={styles.leftIcon}
        name="menu-fold"
      />
      <Text style={styles.headerTitle}>basics</Text>
      <SimpleLineIcons style={styles.rightIcon} name="handbag" />
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
  },
  headerTitle: {
    flex: 1,
    color: '#161616',
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 26,
    fontWeight: 'bold',
  },
  leftIcon: {
    fontSize: 26,
    fontWeight: 'bold',
    left: 20,
    textAlign: 'center',
    color: '#161616',
  },
  rightIcon: {
    fontSize: 26,
    fontWeight: 'bold',
    right: 20,
    textAlign: 'center',
    color: '#161616',
  },
});

export default Header;
