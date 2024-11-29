import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View style={{
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      width: '100%',
    }}>
      <Ionic name="search" style={{
        fontSize: 20,
        position: 'absolute',
        opacity: 0.5,
        zIndex: 1,
        left: 20,
      }} />
      <TextInput placeholder="search" style={{
        backgroundColor: '#EDEDED',
        width: '92%',
        borderRadius: 20,
        paddingLeft: 40,
        padding: 5,
      }} />
    </View>
  );
};

export default SearchInput;
