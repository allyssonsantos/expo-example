import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, Button, Rating } from '@gympass/yoga';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Rating value={1.75} />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
