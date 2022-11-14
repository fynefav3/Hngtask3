import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Country = ({data}) => {
  const navigation = useNavigation();
  console.log(data);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
<View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        {/* <Image
          style={{width: 60, height: 60}}
          source={{
            uri: 'https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-country-of-canada-png-image_6007120.png',
          }}
        /> */}
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
    </TouchableOpacity>
  );
};

export default Country;

const styles = StyleSheet.create({});
