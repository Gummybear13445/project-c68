import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import{createAppContainer } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebook from './screens/Facebook'
import Instagram from './screens/Instagram'
export default class App extends React.Component{

  render(){
  return (
    <View style={styles.container}>
     <AppContainer/>
    </View>
  );
}
}
const TabNavigator=createBottomTabNavigator({
  Instagram:Instagram,
  Facebook:Facebook,
})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  
    backgroundColor: '#008080',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});