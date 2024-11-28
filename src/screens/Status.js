import { View, Text, StatusBar, Image, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';

const Status = ({ route, navigation }) => {
  const { name, image } = route.params;
  const progress = useRef(new Animated.Value(0)).current;
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
  useEffect(() => {
    progress.addListener(({ value }) => {
      console.log(`value ${value}`);
    });
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      navigation.goBack();
    }, 5000);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: '100%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}
      >
        <Animated.View
          style={{
            width: progressAnimation,
            height: '100%',
            backgroundColor: 'white',
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          padding: 12,
          top: 10,
          flexDirection: 'row',
          width: '92%',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              width: '92%',
              height: '92%',
              resizeMode: 'cover',
            }}
            source={image} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Text
            style={{
              paddingLeft: 5,
              color: 'white',
            }}
          >
            {name}
          </Text>
          <Ionic name="close" style={{ color: 'white', fontSize: 15, opacity: 0.6 }} />
        </View>
      </View>
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: 500,
        }}
        source={image} />
    </SafeAreaView>
  );
};

export default Status;
