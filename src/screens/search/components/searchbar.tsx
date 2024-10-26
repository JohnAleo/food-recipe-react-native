import { ScreenView } from '@/components'
import { colors, spacing } from '@/theme'
import { Pressable, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import  Icon  from 'react-native-vector-icons/AntDesign'
import  IonIcon  from 'react-native-vector-icons/Ionicons'

export const SearchBar = () => {
  return (
    <ScreenView>
        <View style={$searchRow}>
            <Pressable style={$searchBar}>
            <Icon name="search1" size={26} color={colors.inputBorder} />
            <TextInput 
                placeholder='Search Recipe' 
                placeholderTextColor={colors.textSecondary}
                style={{fontSize:11, color: colors.inputBorder}}
            >

            </TextInput>
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

const $searchRow : ViewStyle = {
    flexDirection:'row',
    alignItems:'center',
    // marginTop:spacing.lg,
    // paddingHorizontal : spacing.md,
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
  
  const $input : TextStyle = {
        fontSize: 11,
        color: colors.text,
  
  }
