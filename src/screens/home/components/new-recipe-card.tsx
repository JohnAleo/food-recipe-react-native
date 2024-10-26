import { Text } from '@/components'
import { colors, spacing } from '@/theme'
import { ImageStyle, View, ViewStyle,Image, TextStyle } from 'react-native'

import IconTimer from 'react-native-vector-icons/MaterialCommunityIcons'

import Icon from 'react-native-vector-icons/AntDesign'


export const NewRecipeCard = () => {
  return (
    <View style={$card}>
        <View style={$circleImage}>
            <Image 
             source={require('assets/images/new-recipe.png')}
             resizeMode='contain'
             style={$image}
            />
        </View>
        <Text size='md'> Title</Text>
        <View style={$rating}>
            <Icon name= "star" size={10} color= {colors.starColor}/>
            <Icon name= "star" size={10} color= {colors.starColor}/>
            <Icon name= "star" size={10} color= {colors.starColor}/>
            <Icon name= "star" size={10} color= {colors.starColor}/>
            <Icon name= "star" size={10} color= {colors.starColor}/>
        </View>
        <View style={[$row, {justifyContent:'space-between'}]} >
            <View style={[$row]}>
                <Image style={$avatar} source={require('assets/images/joohn.png')}/>
                <Text size='lg' style={$name}>Joohn Doe</Text>
            </View>
            <View style={[$row]}>
            <IconTimer name='timer-outline' size={20}  />
                <Text size='xs'>25 mins</Text>
            </View>
        </View>
        
    </View>
  )
}


const $card : ViewStyle = {
  width: 250,
  height: 95,
  marginRight: spacing.md,
  borderRadius: spacing.sm,
  backgroundColor : colors.palette.white,
  padding: spacing.md,
  position:'relative',
  marginTop: 40, 
  
 
  shadowColor: colors.palette.black,

  shadowOffset:{
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation : 3,
};

const $circleImage : ViewStyle = {
    overflow:'hidden',
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    top: -40,
    right: spacing.md, 
}
const $image : ImageStyle ={
    width: 80,
    height: 80,
}

const $rating : ViewStyle ={
flexDirection:'row',
marginTop: spacing.xs,
alignItems:'center',
}

const $row :ViewStyle ={
    flexDirection:'row',
    alignItems:'center',

}
 const $avatar : ImageStyle = {
    width:20,
    height: 20,
 }

 const $name: TextStyle ={
    marginLeft: spacing.xs,
    color: colors.textSecondary,

 }
