import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../views/SplashScreen';
import WelcomeScreen from '../../views/WelcomeScreen';
import HomeScreen from '../../views/HomeScreen';
import ProductScreen from '../../views/Product';
import ProductList from '../../views/ProductList';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          options={{header: () => null}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="WelcomeScreen"
          options={{header: () => null}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{header: () => null}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="ProductList"
          options={{header: () => null}}
          component={ProductList}
        />
        <Stack.Screen
          name="ProductScreen"
          options={{header: () => null}}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
