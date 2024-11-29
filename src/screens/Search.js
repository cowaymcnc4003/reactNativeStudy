import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native';
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
          <Text style={{
            fontWeight: 'bold',
            color: 'black',
            paddingVertical: 10,
          }}>입력 영역</Text>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ opacity: 0.5 }}>이름</Text>
            <TextInput placeholder="이름 입력" style={{
              fontSize: 15,
              borderBottomColor: '#CDCDCD',
              borderBottomWidth: 1,
            }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
