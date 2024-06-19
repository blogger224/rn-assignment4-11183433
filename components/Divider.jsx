import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Divider = ({ label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.label}>{label}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  label: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'gray',
  },
});