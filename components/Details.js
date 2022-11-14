import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import PagerView from 'react-native-pager-view';

const Details = () => {
  const viewStyles = {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
    justifyContent: 'center',
    paddingBottom: 2,
  };

  return (
    <View style={{display: 'flex', flexDirection: 'column', flex: 1}}>
      <View style={styles.parent}></View>

      <ScrollView
        style={{
          flex: 1,
          display: 'flex',
          height: '100%',
          width: '100%',
        }}>
        <PagerView
          style={{
            height: 200,
            backgroundColor: 'yellow',
            marginBottom: 30,
          }}>
          <View
            style={{
              height: 200,
              backgroundColor: 'yellow',
            }}></View>
          <View
            style={{
              height: 200,
              backgroundColor: 'green',
            }}></View>
        </PagerView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 2,
          }}>
          <Text style={viewStyles}>Population:</Text>
          <Text style={styles.secondText}>233,333</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Region:</Text>
          <Text style={styles.secondText}>Europe</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Capital:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent1}>
          <Text style={viewStyles}>Motto:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Official Language:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Ethic Group:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Religion:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent1}>
          <Text style={viewStyles}>Government:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Independence:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Area:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Currency:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent1}>
          <Text style={viewStyles}>GDP:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Time Zone:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Date Format:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent}>
          <Text style={viewStyles}>Dialing code:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
        <View style={styles.subParent1}>
          <Text style={viewStyles}>Driving side:</Text>
          <Text style={styles.secondText}>Lorem</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  parent: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
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
