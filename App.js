import React from 'react';
import { ScrollView } from 'react-native';
import Landing from './containers/landing.jsx';
import Test from './containers/testing.jsx';

export default function App() {
  return ( 
    <ScrollView>
        <Landing/>
        <Test/>
    </ScrollView>
  );
}