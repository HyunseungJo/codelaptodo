import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform} from 'react-native';
import  Constants  from 'expo-constants';
import TodoList from "./screens/TodoList"
import ZipCodeFinder from './screens/ZipCodeFinder';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ZipCodeFinder />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS ==='android'?Constants.statusBarHeight : 0
  },
});
