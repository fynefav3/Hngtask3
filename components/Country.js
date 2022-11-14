import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Country = ({data}) => {
  const navigation = useNavigation();

  // console.log(data.name.common);

  return (
    <TouchableOpacity
      key={data.name.common}
      onPress={() =>
        navigation.navigate('Details', {
          data: data,
        })
      }>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Image
          style={{width: 60, height: 60, borderRadius: 10}}
          source={{
            uri: data.flags.png,
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginRight: 4,
              paddingLeft: 3,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
            }}>
            {data.name.common}
          </Text>
          <Text
            style={{
              marginRight: 4,
              paddingLeft: 3,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
            }}>
            {data.name.official}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Country;

const styles = StyleSheet.create({});
