import { Text, View, ViewStyle } from "react-native";

export const LoginScreen = () =>{
return(
    <View style={$container}>
        <Text>Login Screen</Text>
    </View>
)
}


const $container : ViewStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
}