import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Filter = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
          borderColor: '#050505',
        }}>
        <Image
          style={{width: 24, height: 24}}
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/electronic-line-3/64/global_Earth_language_international_interface_icon0A-512.png',
          }}
        />
        <Text
          style={{
            marginRight: 4,
            paddingLeft: 3,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
          }}>
          EN
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
          borderColor: '#050505',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 24, height: 24}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/107/107799.png',
          }}
        />
        <Text
          style={{
            marginRight: 4,
            paddingLeft: 3,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
          }}>
          filter
        </Text>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({});
