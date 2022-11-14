import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Filter from './Filter';

const HomePage = ({data}) => {
  // console.log(data);

  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <Image
        style={{width: 130, height: 70}}
        source={{
          uri: 'https://res.cloudinary.com/dl6pfjd5w/image/upload/v1668248408/hng%20task%203/exploreicon_zmi2b7.png',
        }}
      />
      <View style={styles.parent}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
        <TextInput placeholder="Search Country" style={styles.text} />
      </View>

      <View style={styles.home}>
        <Filter />
        <ScrollView>
          <Text style={{padding: 10}}>A</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingTop: 10,
  },
  text: {
    paddingLeft: 50,
    textAlign: 'center',
  },
  parent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    borderWidth: 1,
    marginBottom: 3,
    borderRadius: 5,
    margin: 10,
  },
});
