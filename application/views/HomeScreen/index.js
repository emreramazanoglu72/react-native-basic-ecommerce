import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {CampaningCard} from '../Components/cards';
import Header from '../Components/layout/Header';
import Categoires from './homeComponents/Categoires';
import Categori from './homeComponents/Categori';
import TrendCollections from './homeComponents/TrendCollections';

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <View style={{flex: 1}}>
      <Header navigate={navigate} />
      <ScrollView
        style={{
          padding: 20,
        }}>
        <Categoires navigate={navigate} />
        <TrendCollections navigate={navigate} />
        <CampaningCard
          image={require('../Assets/images/campaning.png')}
          text={'basics summer sale'}
          date={'march 10 - 15'}
        />
        <Categori navigate={navigate} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});

export default HomeScreen;
