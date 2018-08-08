import * as React from 'react'
import { Text, Left, Right, View } from 'native-base'
import styles from './styles'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Dash from 'react-native-dash'
import appCommonStyles from '../../../../../appCommonStyles'

export const WithTabletSeparateSections = (Component, section, allProps, toggleModal, data) =>
  <View style={section.component === 'allChapters' ? appCommonStyles.summaryGrid : null}>

    { /* this jsx and condition is for labTest sections to show the header part in the section -
includes see full history and will not show to allchapters and general finding */
      section.title && section.title === 'Lab Result'

        ? <View style={styles.sectionHeadingLabResult}>
          <Left style={styles.labSectionLeft}>
            <Text style={styles.sectionHeading} >{section.title}</Text>
          </Left>
          <Right style={styles.labsectionRight}>
            <Text numberOfLines={1} style={styles.historyBtn} onPress={() => toggleModal()}>SEE FULL HISTORY</Text>

          </Right>
        </View>

        : section.title
          ? <View style={appCommonStyles.generalHeading}><Text style={styles.sectionHeading}>{section.title}</Text></View> // this condition is written for allchapter section - not to show the section title
          : null

    }
    {
      /* this jsx is for allchapter only and to show it in three columns in a row format  */
      section.component && section.component === 'allChapters' && <Grid style={styles.summaryGrids}>
        {
          section.columns && data &&

                data.map((column, cKey) => {
                  return <Row key={cKey}>
                    {
                      column.map((row, rKey) => {
                        return <Col style={styles.summaryGridCol} key={rKey}>
                          <Col style={column.length < 2 ? { width: '33.33%', height: '100%', padding: 2 } : { width: '100%', height: '100%', padding: 2 }}>
                            <Component
                              questiongroup={row.questiongroups}
                              column={row}
                              instances={allProps.instances}
                              questions={allProps.questions}
                              responses={allProps.responses}
                              answers={allProps.answers}
                              questiongroups={allProps.questiongroups}
                              tablet
                            /></Col>
                          {rKey < 2 && column.length > 1 && <Col style={styles.colOfDashLineDivider}><Dash style={styles.dashLine} dashThickness={1} dashGap={3} dashLength={6} dashColor={'#938f86'} /></Col>}

                        </Col>
                      })
                    }
                  </Row>
                })
        }

      </Grid>
    }
    {
      /* this jsx is for general finding and lab test and will render as usual according to the design */

      section.component !== 'allChapters' && section.columns && section.columns.map((column, cKey) => {
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
