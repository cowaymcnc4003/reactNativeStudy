import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const storyInfo = [
  {
    id: 1,
    name: '나의 스토리',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'john',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 3,
    name: 'tonny',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 4,
    name: 'daniel',
    image: require('../../assets/images/profile3.jpeg'),
  },
  {
    id: 5,
    name: 'sojeong',
    image: require('../../assets/images/profile4.jpeg'),
  },
  {
    id: 6,
    name: 'jaeho',
    image: require('../../assets/images/profile5.jpeg'),
  },
];

const Stories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={{ paddingVertical: 20 }} >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate('Status', {
                name: data.name,
                image: data.image,
              });
            }}
          >
            <View
              style={{
                flexDirection: 'column',
                position: 'relative',
                paddingHorizontal: 8,
              }}
            >
              {
                data.id === 1 ? (
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 15,
                      right: 10,
                      zIndex: 1,
                    }}
                  >
                    <Entypo
                      name="circle-with-plus"
                      style={{
                        fontSize: 20,
                        color: '#405de6',
                        backgroundColor: 'white',
                        borderRadius: 100,
                      }}
                    />
                  </View>
                ) : null
              }
              <View
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 100,
                  borderColor: '#c15842',
                  borderWidth: 1.8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    borderColor: 'orange',
                  }}
                  source={data.image} />
              </View>
              <Text style={{
                fontSize: 10,
                textAlign: 'center',
                opacity: data.id === 1 ? 0.5 : 1,
              }}>{data.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
