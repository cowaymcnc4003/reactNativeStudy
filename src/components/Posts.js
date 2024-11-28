import { View, Text } from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const postInfo = [
  {
    postTitle: 'John',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 765,
    isLiked: true,
  },
  {
    postTitle: 'Tonny',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 3,
    isLiked: true,
  },
  {
    postTitle: 'Tom',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post5.jpeg'),
    likes: 3,
    isLiked: true,
  },
  {
    postTitle: 'React',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 765,
    isLiked: true,
  },
];

const Posts = () => {
  return (
    <View>
      {
        postInfo.map((data, index) => {
          return (
            <PostItem key={index} data={data} />
          );
        })
      }
    </View>
  );
};

export default Posts;
