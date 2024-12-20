import { colors, fonts } from '@/theme';
import React, { PropsWithChildren } from 'react'
import {Text as RNText, TextStyle} from 'react-native'


type TextProps ={
    size: keyof typeof TextSizes;
    style?: TextStyle;
    fontWeight?:keyof typeof fonts.poppins;
} & PropsWithChildren


export const Text = ({fontWeight, size, style, children}:TextProps) => {
    const textStyles=[
        $baseTextStyle,
        size && {fontSize: TextSizes[size || 'md']},
        fontWeight && {fontFamily: fonts.poppins[fontWeight]},
        style,
    ]
  return (
    <RNText style={textStyles}>{children}</RNText>
  )
}


const TextSizes = {
    xss: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
}

const $baseTextStyle: TextStyle = {
    color: colors.text,
    fontSize:TextSizes.md,
    fontFamily:fonts.poppins.regular
}

