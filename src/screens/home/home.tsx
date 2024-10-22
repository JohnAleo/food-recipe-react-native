import { colors, spacing } from "@/theme";
import {  Pressable, View, ViewStyle } from "react-native";
import { ScreenView, Text } from "@/components";
import { Avatar } from "../components";
import Icon from 'react-native-vector-icons/AntDesign'
import IonIcon from 'react-native-vector-icons/Ionicons'

export const HomeScreen = () =>{
return(
    <ScreenView >
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
            <Pressable style={$searchBar}>
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
    </ScreenView>
)
}




const $headerRow : ViewStyle = {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
}

const $searchRow : ViewStyle = {
    flexDirection:'row',
    alignItems:'center',
    marginTop:spacing.lg,
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





