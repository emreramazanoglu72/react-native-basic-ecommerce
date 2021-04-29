import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'SEARCH PRODUCTS'}
        style={styles.TextInput}
        placeholderTextColor="#868686"
      />
      <Icon style={styles.Icon} name={'filter-outline'} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#868686',
    marginBottom: 20,
  },
  TextInput: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 15,
    flex: 1,
  },
  Icon: {
    color: '#868686',
    fontSize: 24,
    alignSelf: 'center',
  },
});
