import React from 'react'
import { View, Text } from 'react-native'
import { ListItem } from 'native-base'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'

export default class ChapterHandle extends React.Component {


  render() {
    const { chapter, active, onClick } = this.props    // const className = classNames.bind(styles)({
    //   chapterHandle: true,
    //   active: active,
    // })
    return (
      <View>
        {chapter &&

                   <ListItem icon onPress={ () => onClick } style={ [active ? styles.activeListItem : { backgroundColor:chapter.color } , styles.listItemGeneral]}>
                     <Text style={[active ? styles.activeIcon : styles.chapterIcon]}>
                       <FontAwesome name={chapter.icon} size={20} />
                     </Text>
                     <Text style={[active ? styles.activeText : styles.chapterHandleTitle]}>
                       {chapter.title}
                     </Text>
                   </ListItem>
        }

      </View>
    )
  }
}
