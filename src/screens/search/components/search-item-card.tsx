import { Text } from '@/components';
import { colors, spacing } from '@/theme';
import { ImageBackground, Pressable, TextStyle, View } from 'react-native';
import {  ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import  Icon from 'react-native-vector-icons/AntDesign';


type SearchItemCardProps= {
    item : {
    id:string;
    title: string;
    rating : number ;
    author: string;
    image: string;
  };
}

export const SearchItemCard = ({item}: SearchItemCardProps) => {
  return (
    <Pressable style={$card}>
    <ImageBackground 
      source={{uri:item?.image}} 
      resizeMode='cover'
       style={$imageWrapper}
      >
        <View style={$ratingBadge}>
          <Icon name='star' size={12} color={colors.palette.rating} style={{alignItems:'center'}}/>
          <Text size='xss'>{item.rating}</Text>
        </View>
      <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'transparent']}
          start={{x: 1, y: 1}}
          end={{x: 1, y: 0}}
          style={$overlay}  
          />
      <Text 
        size='xs' 
        fontWeight='bold' 
        style={$title}
      >
        {item.title}
      </Text>
      <Text
        size='xs' 
        fontWeight='bold' 
        style={$author}
        >
        {item.title}
      </Text>
      </ImageBackground>
      </Pressable>

  )
}

const $card : ViewStyle ={
  margin: spacing.xs,
  flex:1,
}

const $imageWrapper: ViewStyle = {
     
     position:'relative',
     margin: spacing.xs,
     minHeight:150,
     borderRadius:10,
     overflow:'hidden',
     padding: spacing.xs,
   
}

const $overlay: ViewStyle = {
  position:'absolute',
top:0,
left: 0,
right: 0,
bottom: 0,
};

const $title : TextStyle ={
  color: colors.palette.white,
  marginTop: 'auto',

}

const $author : TextStyle = {
  fontSize: 8 ,
  color: colors.textSecondary,
}

const $ratingBadge : ViewStyle = {
  flexDirection:'row',
  alignSelf: 'flex-end',
  width: 40, 
  height: 20,
  borderRadius: 10,
  alignItems:'center',
  justifyContent:'center',
  gap: spacing.xss,
  paddingHorizontal: spacing.xss,
  backgroundColor: colors.palette.secondary20,
}


