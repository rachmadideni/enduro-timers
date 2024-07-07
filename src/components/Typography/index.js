import { View, Text } from 'react-native'
import React from 'react'

export default function Typography({ children, style }) {
  return (
      <Text style={style}>{children}</Text>
  )
}