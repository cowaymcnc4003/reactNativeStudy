import { View, Text, Image } from 'react-native';
import React from 'react';

const ProfileBody = ({ profileData }) => {

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
      }}>
        <View style={{
          alignItems: 'center',
        }}>
          <Image style={{
            width: 60,
            height: 60,
            borderRadius: 100,

          }} source={profileData.profileImage} />
          <Text style={{
            fontWeight: 'bold',
            color: 'black',
            paddingVertical: 5,
          }}>{profileData.name}</Text>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: 'black',
          }}>{profileData.posts}</Text>
          <Text style={{
            color: 'black',
          }}>게시물</Text>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: 'black',
          }}>{profileData.followers}</Text>
          <Text style={{
            color: 'black',
          }}>팔로워</Text>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: 'black',
          }}>{profileData.following}</Text>
          <Text style={{
            color: 'black',
          }}>팔로잉</Text>
        </View>
      </View >
    </View>
  );
};

export default ProfileBody;
