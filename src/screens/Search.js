import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import ProfileRecommend from '../components/ProfileRecommend';
import { FriendsProfileData } from '../components/DataBase';

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
        <View style={{ padding: 10 }}>
          <ProfileBody profileData={profileData} />
          <ProfileButton />
          <Text style={{
            fontWeight: 'bold',
            color: 'black',
            paddingVertical: 10,
          }}>회원님을 위한 추천</Text>
          <ScrollView horizontal={true}>
            {FriendsProfileData.map((data, index) => {
              return <ProfileRecommend key={index} data={data} />;
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
