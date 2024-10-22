import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import * as Screens from '@/screens'
import { BellIcon, BookmarkIcon, HomeIcon, UserIcon } from "@/icons";
import { colors } from "@/theme";


type BottomTabParamList = {
    Home:undefined;
    Saved:undefined;
    User:undefined;
    Notification:undefined;
}

const Tab = createBottomTabNavigator<BottomTabParamList>();


export const TabNavigator = ()=>{
        return(
            <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle:{
                    minHeight:70,
                    paddingBottom:10,
                },
            }}
            >
                <Tab.Screen options={{
                    tabBarIcon: ({focused}) => (
                    <HomeIcon 
                        fill={focused? colors.tabIconFocused:undefined} 
                        stroke={focused? colors.primary:undefined}/>
                )}} 
                    name="Home" 
                    component={Screens.HomeScreen}/> 
                <Tab.Screen options={{
                    tabBarIcon:({focused}) => (
                    <BookmarkIcon 
                        fill={focused? colors.primary:undefined}
                        stroke={focused? colors.tabIconFocused:undefined}/>
                )}} 
                    name="Saved" 
                    component={Screens.SavedScreen}/>
                <Tab.Screen options={{
                    tabBarIcon : ({focused}) => (
                    <BellIcon 
                        fill={focused? colors.primary: undefined}
                        stroke={focused? colors.primary:undefined}/>
                )}} 
                    name="Notification" 
                    component={Screens.NotificationScreen}/>
                <Tab.Screen options={{
                    tabBarIcon : ({focused}) => (
                    <UserIcon 
                        stroke={focused? colors.primary:undefined}
                        fill={focused? colors.tabIconFocused:undefined}/>
                )}} 
                    name="User" 
                    component={Screens.ProfilreScreen}/>
            </Tab.Navigator>
        )
}

