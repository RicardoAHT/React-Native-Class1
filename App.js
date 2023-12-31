import React from 'react'
import Main from './src/components/Main'
import { NativeRouter } from "react-router-native"
import { StatusBar, statusBar } from "expo-status-bar"

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <Main/>
      </NativeRouter>   
    </>

  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
*/