import { ScreenView, Text } from '@/components'
import { RootStackParamList } from '@/navigators'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SearchBar, SearchItemCard } from './components'
import { FlatList, TextStyle } from 'react-native'
import { spacing } from '@/theme'
import { ViewStyle } from 'react-native'


const data = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    rating: 4.5,
    image:
      'https://avatars.mds.yandex.net/i?id=641fa9f0b98ed4d564d1f00f8cb557390948d0c6-10468051-images-thumbs&n=13',
    author: 'Shakhzod',
  },
  {
    id: '2',
    title: 'Spaghetti Carbonara',
    rating: 4.5,
    image:
      'https://avatars.mds.yandex.net/i?id=641fa9f0b98ed4d564d1f00f8cb557390948d0c6-10468051-images-thumbs&n=13',
    author: 'Shakhzod',
  },
  {
    id: '3',
    title: 'Spaghetti Carbonara',
    rating: 4.5,
    image:
      'https://avatars.mds.yandex.net/i?id=641fa9f0b98ed4d564d1f00f8cb557390948d0c6-10468051-images-thumbs&n=13g',
    author: 'Shakhzod',
  },
  {
    id: '4',
    title: 'Spaghetti Carbonara',
    rating: 4.5,
    image:
      'https://avatars.mds.yandex.net/i?id=641fa9f0b98ed4d564d1f00f8cb557390948d0c6-10468051-images-thumbs&n=13',
    author: 'Shakhzod',
  },
];

export const SearchScreen = ({
    navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <ScreenView contentContainerStyle={$container}>
           <SearchBar/>
           <Text 
              fontWeight='medium' 
              size='md'
              style={$title}>
                Recent Search
           </Text>
           <FlatList
            data={data}
            numColumns={2}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => <SearchItemCard item={item} />} 
           />
    </ScreenView>
  )
}

const $title : TextStyle = {
  marginVertical : spacing.sm,
paddingHorizontal: spacing.xs, 
}

const $container : ViewStyle ={
  paddingHorizontal: spacing.xs,
}
