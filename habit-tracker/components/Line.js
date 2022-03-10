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