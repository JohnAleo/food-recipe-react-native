import { colors, spacing } from "@/theme";
import {  Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native";
import { Chips, ScreenView, Text } from "@/components";
import { Avatar, CategoryCard, NewRecipeCard } from "./components";
import Icon from 'react-native-vector-icons/AntDesign'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList, RootStackParamList } from "@/navigators";
import { useState } from "react";

const chips = [
    'All', 
    'Indian',
    'Italian',
    'Asian',
    'Mexican',
    'Uzbek'
 ]

export const HomeScreen = ({
    navigation
}: BottomTabScreenProps<BottomTabParamList  & RootStackParamList>) =>{
    const [activeCategory, setActiveCategory] = useState('All')
    const handleSearch = () =>{
        navigation.navigate('Search')
    }
    return(
    <ScreenView  contentContainerStyle={{paddingHorizontal:0}}>
        <View style={$headerRow}>
            <View>
                <Text size="xl" fontWeight="bold">
                    Hello Jega
                </Text>
                <Text 
                    style={{ fontSize: 11, color: colors.textSecondary }}
                    fontWeight="medium" size={"xss"}>
                    What are you cooking today?
                </Text>
            </View>
            <Avatar/>
        </View>
        <View style={$searchRow}>
            <Pressable style={$searchBar} onPress={handleSearch}>
            <Icon name="search1" size={26} color={colors.inputBorder} />
            <Text style={{ fontSize: 11, color: colors.textSecondary }} size={"xss"}>
                Search recipe
            </Text>
            </Pressable >
             <Pressable style={$filter}>
                <IonIcon 
                    name="options-outline"
                    size={26}
                    color={colors.inputBorder}/>
             </Pressable>
        </View>
        <ScrollView 
            showsHorizontalScrollIndicator={false}
            horizontal 
            style={{maxHeight:spacing.xl, marginTop: spacing.lg}}
            contentContainerStyle={{gap:10, paddingHorizontal: spacing.md}}>
            {chips.map((chip, index) => (
                <Chips 
                key={index} 
                active={chip === activeCategory}
                onPress={()=>setActiveCategory(chip)}>{chip}</Chips>
            ))}
           
        </ScrollView>
        <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={$horizontalContainer}
                >
                   
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
            </ScrollView>
            <Text size="md" style={$sectionTitle} fontWeight="bold">New Recipes </Text>
            <ScrollView
             horizontal 
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{paddingHorizontal: spacing.md, maxHeight:150}}>
                <NewRecipeCard/>
                <NewRecipeCard/>
                <NewRecipeCard/>
             </ScrollView>
    </ScreenView>
)
}




const $headerRow : ViewStyle = {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: spacing.md,
}

const $searchRow : ViewStyle = {
    flexDirection:'row',
    alignItems:'center',
    marginTop:spacing.lg,
    paddingHorizontal : spacing.md,
}

const $searchBar : ViewStyle ={
    flex: 1,
    gap: spacing.xs,
    height: 40,
    flexDirection:'row',
    alignItems:'center',
    // marginTop:spacing.lg,
    borderRadius: 10,
    borderWidth:1,
    borderColor: colors.inputBorder,
    paddingHorizontal: spacing.xs,  
};

const $filter: ViewStyle = {
    height: 40,
    width:40,
    backgroundColor:colors.primary,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    marginLeft:spacing.xs,
}
const $horizontalContainer : ViewStyle = {
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
    maxHeight: 230,
    // marginBottom: spacing.md,
}

const $sectionTitle: TextStyle = {
    paddingHorizontal:spacing.md,

}





