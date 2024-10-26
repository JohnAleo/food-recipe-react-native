import React from 'react'
import { View, ViewStyle } from 'react-native'

type SearchItemCardProps= {
    item : any; 
    id: string;
    title: string;
    rate : string ;
    author: string;
}

export const SearchItemCard = ({item}: SearchItemCardProps) => {
  return (
    <View style={$card}></View>
  )
}

const $card: ViewStyle = {
    flex: 1,
    borderWidth:1,
    height:100,
}


