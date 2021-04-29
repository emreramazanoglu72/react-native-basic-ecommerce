import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TagButton = ({text}) => {
  return (
    <TouchableOpacity style={text == 'All' ? styles.all : styles.button}>
      <Text style={[styles.text, text == "All" && {color: 'white'}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  all: {
    borderWidth: 1,
    backgroundColor: 'black',
    borderColor: 'black',
    margin: 'auto',
    margin: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: '#C7C7C7',
    margin: 'auto',
    margin: 5,
  },
  text: {
    fontSize: 13,
    color: '#414141',
    letterSpacing: 1,
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default TagButton;
