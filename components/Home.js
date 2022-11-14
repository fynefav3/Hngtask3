import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomePage from './HomePage';
import Country from './Country';
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

const countriesURL = 'https://restcountries.com/v3.1/all';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);


  const fetchCountries = () => {
    const countries = fetch(countriesURL);
    countries
      .then(async response => await setData(response.json()))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };
  //fetching Data
  useEffect(() => {
    fetchCountries();
  }, []);

  

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={{width: '100%'}}>
      {isLoading ? <ActivityIndicator /> : <Country data={data} />}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
