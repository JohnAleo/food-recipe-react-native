import { Text, View, ViewStyle } from "react-native";

export const NotificationScreen = () =>{
return(
    <View style={$container}>
        <Text>Notification Screen</Text>
    </View>
)
}


const $container : ViewStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
}