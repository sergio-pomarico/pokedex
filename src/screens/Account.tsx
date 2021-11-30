import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AccountScreen;
