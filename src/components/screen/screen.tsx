
import { colors, spacing } from '@/theme';
import React, { PropsWithChildren } from 'react'
import { ScrollView, View, ViewStyle } from 'react-native';


type ScreenViewProps = {
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
} & PropsWithChildren;




export const ScreenView = ({ 
    style,
    contentContainerStyle,
    children,
}: ScreenViewProps) => {
    return (
  <ScrollView 
    style={style} 
    contentContainerStyle={[$container ,contentContainerStyle]}>
    {children}
    </ScrollView>
    );
}

const $container : ViewStyle = {
    backgroundColor : colors.screenBackground,
    flex: 1,
    paddingVertical: spacing.lg - 4,
    paddingHorizontal: spacing.md,
}