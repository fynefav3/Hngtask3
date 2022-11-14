import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomePage from './HomePage';
import axios from 'axios';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const countriesURL = 'https://restcountries.com/v3.1/all';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchCountries = async () => {
    const response = await axios.get(countriesURL);

    let d = response.data;
    d.sort();

    // d.sort(function (a, b) {
    //   return a['name']['common'] - b['name']['common'];
    // });

    setData(d);
  };

  React.useEffect(() => {
    fetchCountries().then(e => {
      // const gd = data.groupByToMap(d => {
      //   return d.name.common.charAt(0);
      // });

      // console.log(gd[0]);
      setLoading(false);
    });
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{width: '100%'}}>
      {isLoading ? <ActivityIndicator /> : <HomePage key="home" data={data} />}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
