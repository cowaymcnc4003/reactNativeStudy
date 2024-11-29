import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';

const Search = () => {
  return (
    <SafeAreaView style={{
      width: '100%',
      backgroundColor: 'white',
      position: 'relative',
    }}>
      <View>
        <SearchInput />
      </View>
    </SafeAreaView>
  );
};

export default Search;
