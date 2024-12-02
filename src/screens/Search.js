import { View, Text, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import ProfileRecommend from '../components/ProfileRecommend';
import { FriendsProfileData } from '../components/DataBase';
import SearchInputForm from '../components/SearchInputForm';

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
      flex: 1,
      backgroundColor: 'white',
      position: 'relative',
    }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={40} // 필요에 따라 오프셋 조정
      >
        <ScrollView contentContainerStyle={{
          flexGrow: 1,
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
              <SearchInputForm />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
};

export default Search;
