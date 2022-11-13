import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Country = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
      <Image
        style={{width: 60, height: 60}}
        source={{
          uri: 'https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-country-of-canada-png-image_6007120.png',
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
          Country Name
        </Text>
        <Text
          style={{
            marginRight: 4,
            paddingLeft: 3,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
          }}>
          Country
        </Text>
      </View>
    </View>
  );
};

export default Country;

const styles = StyleSheet.create({});
