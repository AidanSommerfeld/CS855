{/*
  Aidan Sommerfeld
  200362730

  Line.js

  Creates a horizontal rule line

 */}

import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Line() {
  const { colors } = useTheme();
  return (
      <View style={{
          height: 5,
          backgroundColor: colors.card,
          alignSelf: 'stretch',
      }} />
  )
}