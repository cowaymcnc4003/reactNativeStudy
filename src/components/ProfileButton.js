import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const ProfileButton = () => {
  return (
    <>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
      }}>
        <TouchableOpacity style={{
          backgroundColor: '#3493D9',
          borderRadius: 5,
          width: '42%',
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{ color: 'white' }}>Follow</Text>
        </TouchableOpacity>
        <View style={{
          borderColor: '#EDEDED',
          borderWidth: 1,
          borderRadius: 5,
          width: '42%',
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>메시지</Text>
        </View>
      </View>
    </>
  );
};

export default ProfileButton;
