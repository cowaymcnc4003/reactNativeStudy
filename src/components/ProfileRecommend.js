import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const ProfileRecommend = ({ data }) => {

  return (
    <View>
      <View style={{
        width: 160, height: 200, justifyContent: 'center', alignItems: 'center', borderColor: '#EDEDED', borderWidth: 0.5, margin: 3,
      }}>
        <Ionic name="close" style={{
          position: 'absolute', fontSize: 25, opacity: 0.6, top: 5, right: 5,
        }} />
        <Image style={{
          width: 70,
          height: 70,
          borderRadius: 100,
        }} source={data.profileImage} />
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', color: 'black' }}>{data.name}</Text>
          <Text>{data.accountName}</Text>
        </View>
        <TouchableOpacity style={{
          width: '80%',
          paddingVertical: 10,
        }}>
          <View style={{
            backgroundColor: '#3493D9',
            width: '100%',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,
          }}>
            <Text style={{
              color: 'white',
            }}>Follow</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileRecommend;
