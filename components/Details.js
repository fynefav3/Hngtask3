import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React from 'react';
import PagerView from 'react-native-pager-view';

const Details = ({route, navigation}) => {
  const viewStyles = {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
    justifyContent: 'center',
    paddingBottom: 2,
  };

  const lang = [];
  const enthnic = [];
  const currencies = [];

  const data = route.params['data'];

  for (const key in data['languages']) {
    if (Object.hasOwnProperty.call(data['languages'], key)) {
      const element = data['languages'][key];

      lang.push(element + ', ');
    }
  }

  for (const key in data['demonyms']) {
    if (Object.hasOwnProperty.call(data['demonyms'], key)) {
      const element = data['demonyms'][key];

      enthnic.push(element['m'] + ', ');
    }
  }

  for (const key in data['currencies']) {
    if (Object.hasOwnProperty.call(data['currencies'], key)) {
      const element = data['currencies'][key];

      currencies.push(element['name'] + ', ');
    }
  }

  return (
    <View style={{display: 'flex', flexDirection: 'column', flex: 1}}>
      <View style={styles.parent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 24, height: 24}}
            source={{
              uri: 'http://cdn.onlinewebfonts.com/svg/img_124224.png',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 16,
            fontSize: 16,
          }}>
          {data['name']['common']}
        </Text>
      </View>

      <ScrollView
        style={{
          flex: 1,
          display: 'flex',
          height: '100%',
          width: '100%',
          paddingLeft: 16,
          paddingRight: 16,
          marginTop: 8,
        }}>
        <PagerView
          style={{
            height: 200,
            marginBottom: 30,
          }}>
          <Image
            style={{width: '100%', height: 200, borderRadius: 10}}
            source={{
              uri: data['flags']['png'],
            }}
          />
          {data['coatOfArms']['png'] !== undefined ? (
            <Image
              style={{width: '100%', height: 200, borderRadius: 10}}
              source={{
                uri: data['coatOfArms']['png'],
              }}
            />
          ) : (
            <View />
          )}
        </PagerView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 2,
          }}>
          <Text style={viewStyles}>Population:</Text>
          <Text style={styles.secondText}>{data['population']}</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Region:</Text>
          <Text style={styles.secondText}>{data['region']}</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Capital:</Text>
          <Text style={styles.secondText}>{data['capital'][0]}</Text>
        </View>
        <View style={styles.subParent1}>
          <Text style={viewStyles}>Motto:</Text>
          <Text style={styles.secondText}></Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Official Language:</Text>
          <Text style={styles.secondText}>{lang}</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Ethic Group:</Text>
          <Text style={styles.secondText}>{enthnic}</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Religion:</Text>
          <Text style={styles.secondText}></Text>
        </View>
        <View style={styles.subParent1}>
          <Text style={viewStyles}>Government:</Text>
          <Text style={styles.secondText}></Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Independence:</Text>
          <Text style={styles.secondText}>
            {data['independent'] ? 'Independent' : 'Under colonization'}
          </Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Area:</Text>
          <Text style={styles.secondText}>{data['area']}</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Currency:</Text>
          <Text style={styles.secondText}>{currencies}</Text>
        </View>
        <View style={styles.subParent1}>
          <Text style={viewStyles}>GDP:</Text>
          <Text style={styles.secondText}></Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Time Zone:</Text>
          <Text style={styles.secondText}>{data['timezones'][0]}</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Date Format:</Text>
          <Text style={styles.secondText}></Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Dialing code:</Text>
          <Text style={styles.secondText}>{data['idd']['root']}</Text>
        </View>
        <View style={styles.subParent1}>
          <Text style={viewStyles}>Driving side:</Text>
          <Text style={styles.secondText}>Lo{data['car']['side']}rem</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  parent: {
    marginTop: 5,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
  },
  subParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 2,
  },
  subParent1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  secondText: {
    fontSize: 14,
    alignItems: 'center',
    color: 'black',
    paddingLeft: 5,
  },
});
