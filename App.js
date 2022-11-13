/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Country from './components/Country';
import Filter from './components/Filter';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{width: '100%'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Image
          style={{width: 130, height: 70}}
          source={{
            uri: 'https://res.cloudinary.com/dl6pfjd5w/image/upload/v1668248408/hng%20task%203/exploreicon_zmi2b7.png',
          }}
        />
        <View
          style={{
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
          }}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color="#000"
          />
          <TextInput placeholder="Search Country" style={styles.text} />
        </View>

        <View
          style={{
            display: 'flex',

            width: '100%',
            height: '100%',
            flexDirection: 'column',
            paddingTop: 10,
          }}>
          <Filter />
          <ScrollView>
            <Text style={{padding: 10}}>A</Text>
            <Country />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingLeft: 50,
    textAlign: 'center',
  },
});

export default App;
