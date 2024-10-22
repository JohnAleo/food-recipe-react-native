import { Text, View, ViewStyle } from "react-native";

export const ProfilreScreen = () =>{
return(
    <View style={$container}>
        <Text>Profile Screen</Text>
    </View>
)
}


const $container : ViewStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
}