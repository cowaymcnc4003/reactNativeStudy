import { View, Text, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView, Platform, Image, StatusBar, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import ProfileRecommend from '../components/ProfileRecommend';
import { FriendsProfileData } from '../components/DataBase';
import SearchInputForm from '../components/SearchInputForm';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

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
  const [image, getImage] = useState(null);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    console.log(image);
  }, [image]);
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
              <ProfileBody profileData={profileData} getImage={getImage} />
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
        {image ?
          (<View
            style={{
              position: 'absolute',
              zIndex: 1,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(52,52,52,0.8)',
            }}
          >
            <StatusBar backgroundColor="#525252" barStyle="dark-content" />
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'white',
                width: '90%',
                top: windowHeight / 6,
                left: windowWidth / 18,
                height: 465,
                borderRadius: 15,
                zIndex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                }}
              >
                <Image source={image}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                  }} />
                <View
                  style={{
                    paddingLeft: 8,
                  }}>
                  <Text style={{ fontSize: 13, fontWeight: '600' }}>
                    친구 아이디
                  </Text>
                </View>
              </View>
              <Image source={image} style={{ width: '100%', height: '80%' }} />
              <View
                style={{
                  justifyContent: 'space-around',
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 8,
                }}>
                {/* ddd */}
                <Ionic name="heart-outline" style={{ fontSize: 26 }} />
                <Ionic name="person-circle-outline" style={{ fontSize: 26 }} />
                <Feather name="navigation" style={{ fontSize: 26 }} />
              </View>
            </View>
          </View>
          ) : null}
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
};

export default Search;
