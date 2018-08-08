import * as React from 'react'
import { Text, Left, Right, View } from 'native-base'
import styles from './styles'
import stylesMediaQuery from '../../../mediaqueryStyles'
import appCommonStyles from '../../../../../appCommonStyles'

export const WithSeparateSections = (Component, section, allProps, toggleModal) =>

  <View style={{ width: '100%' }} >
    {section.title && section.title === 'Lab Result'

      ? <View style={styles.sectionHeadingLabResult}>
        <Left style={stylesMediaQuery.labSectionLeft}>
          <Text style={styles.sectionHeading} >{section.title}</Text>
        </Left>
        <Right style={stylesMediaQuery.labsectionRight}>
          <Text numberOfLines={1} style={styles.historyBtn} onPress={() => toggleModal()}>SEE FULL HISTORY</Text>
        </Right>
      </View>
      : section.title
        ? <View style={appCommonStyles.generalHeading}><Text style={styles.sectionHeading}>{section.title}</Text></View> // this condition is written for allchapter section - not to show the section title
        : null
    }
    {section.columns && section.columns.map((column, cKey) => {
      return <Component
        questiongroup={column.questiongroups}
        column={column}
        key={cKey}
        instances={allProps.instances}
        questions={allProps.questions}
        responses={allProps.responses}
        answers={allProps.answers}
        questiongroups={allProps.questiongroups}
        matrixindicators={allProps.matrixindicators}
      />
    })
    }
    {!section.columns &&
    <View>
      <Text>
                            No Data Provided
      </Text>
    </View>
    }
  </View>
