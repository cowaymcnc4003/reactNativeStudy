import { View, Text, TextInput } from 'react-native';
import React from 'react';

const SearchInputForm = () => {
  return (
    <>
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
      <Text style={{
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 10,
      }}>입력 영역2</Text>
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ opacity: 0.5 }}>이름</Text>
        <TextInput placeholder="닉네임 입력" style={{
          fontSize: 15,
          borderBottomColor: '#CDCDCD',
          borderBottomWidth: 1,
        }} />
      </View>
    </>
  );
};

export default SearchInputForm;
