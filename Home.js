import React from 'react';
import {View, Text, StatusBar, TouchableOpacity } from 'react-native';
import {List,Divider} from 'react-native-paper';
const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
         <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
    <TouchableOpacity onPress={()=>navigation.navigate('customer')}>
      <List.Item title="Add Customer" />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity onPress={()=>navigation.navigate('Sale')}>
      <List.Item title="Total Sale" />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity onPress={()=>navigation.navigate('Recovery')}>
      <List.Item title="Total Recovery" />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity onPress={()=>navigation.navigate('Khata')}>
      <List.Item title="Khata Holders list" />
      </TouchableOpacity>
      <Divider />
     
    </View>
  );
};

export default Home;
