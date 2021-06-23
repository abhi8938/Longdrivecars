import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { observer, inject } from "mobx-react"
import AppRouter from './navigation/AppRouter';

@observer
class App extends React.Component{


  render(){ 
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AppRouter/>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 30,
  },
  header: {
    fontSize: 40,
  },
})

export default App
