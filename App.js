import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './Component/TaskList'
import Footer from './Component/Fotter';
import GlobalState from './Context/GlobalState';

export default function App() {
  return (
    <GlobalState>
        <View style={styles.container}>
          <TaskList />
          <Footer/>
      </View>
      </GlobalState>
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
