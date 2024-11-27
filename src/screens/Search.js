import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      }} >
        <View>
          <Text>Search</Text>
          <Text>ddd</Text>
        </View>
        <View />
      </View>
    </SafeAreaView>
  );
};

export default Search;
