import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import Profile from './components/Profile';
import Edit from './components/Edit';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/FontAwesome';




const MainNavigator = createStackNavigator({
  Profile: { screen: Profile },
  Edit: { screen: Edit },

});

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home, 
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="home"
                color={tintColor}
                size={24}
            />
        )
    }) },
    Profile: { screen: MainNavigator, navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
          <Icon
              name="user"
              color={tintColor}
              size={24}
          />
      )
  }) },
  },
);

const App = createAppContainer(TabNavigator);

export default App;
  