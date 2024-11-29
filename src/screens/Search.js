import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';
import ProfileBody from '../components/ProfileBody';

const Search = () => {
  const profileData = {
    name: 'react',
    accountName: 'React',
    profileImage: require('../../assets/images/profile4.jpeg'),
    posts: 30,
    followers: 31,
    following: 44,
    follow: false,
  };

  return (
    <SafeAreaView style={{
      width: '100%',
      backgroundColor: 'white',
      position: 'relative',
    }}>
      <View>
        <SearchInput />
        <ProfileBody profileData={profileData} />
      </View>
    </SafeAreaView>
  );
};

export default Search;
