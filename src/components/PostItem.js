import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';

const PostItem = ({ data }) => {
  const [like, setLike] = useState(data.isLike);
  return (
    <View
      style={{
        borderBlockColor: 'gray',
        borderBottomWidth: 0.2,
        paddingBottom: 10,
      }}
    >
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Image source={data.postPersonImage} style={{
            width: 40,
            height: 40,
            borderRadius: 100,
          }} />
          <View style={{
            paddingLeft: 5,
          }}>
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
            }} >{data.postTitle}</Text>
          </View>
        </View>
        <Feather name="more-vertical" style={{
          fontSize: 20,
        }} />
      </View>
      <View style={{
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
        <Image source={data.postImage} style={{
          width: '100%',
          height: 400,
          resizeMode: 'cover',
        }} />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 15,
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <TouchableOpacity onPress={() => setLike(prev => !prev)} >
            <AntDesign
              style={{ fontSize: 20, paddingRight: 10 }}
              name={like ? 'heart' : 'hearto'}
            />
          </TouchableOpacity>
          <Ionic
            name="chatbubble-outline"
            style={{ fontSize: 20, paddingRight: 10 }}
          />
          <Feather name="navigation" style={{ fontSize: 20 }} />
        </View>
        <Feather name="bookmark" style={{ fontSize: 20 }} />
      </View>
      <View style={{
        paddingHorizontal: 15,
      }}>
        <Text>좋아요 {like ? data.likes + 1 : data.likes} 개 </Text>
        <Text style={{
          fontWeight: '700',
          fontSize: 14,
          paddingVertical: 2,
        }}>게시글 설명글</Text>
        <Text style={{ opacity: 0.4, paddingVertical: 2, marginTop: 5, marginBottom: 5 }}>댓글 모두 보기</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Image source={data.postPersonImage} style={{
              width: 30,
              height: 30,
              borderRadius: 100,
            }} />
            <TextInput placeholder="댓글 달기" style={{ opacity: 0.5 }} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#0095F6' }}>게시</Text>
          </View>
        </View>
      </View>
    </View >
  );
};

export default PostItem;