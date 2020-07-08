import React, {useEffect} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

export default ({route}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{height: '100%', width: '100%'}}
        source={{uri: route.params.photo.uri}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
