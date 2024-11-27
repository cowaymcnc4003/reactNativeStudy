import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 500,
              color: 'black',
            }}
          >mhleeApp</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <FontAwesome name="plus-square-o" style={{ fontSize: 24, paddingHorizontal: 15 }} />
          <Feather name="navigation" style={{ fontSize: 24 }} />
        </View>
      </View>
      <Stories />
    </SafeAreaView >
  );
};

export default Home;
