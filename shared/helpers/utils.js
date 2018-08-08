// export const clone = (obj) => {
//   if (Array.isArray(obj))
//     return obj.map(clone)
//   else if (typeof obj === 'object')
//     return Object.entries(obj)
//       .reduce((res, [key, val]) => ({ ...res, [key]: clone(val) }), {})
//   else
//     return obj
// }

export const contrast = (colorHex, light, dark) => {
  if(colorHex) {
    const r = parseInt(colorHex.substring(1, 3), 16)
    const g = parseInt(colorHex.substring(3, 5), 16)
    const b = parseInt(colorHex.substring(5, 7), 16)
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return luminance >= 179 ? dark||'#000000' : light||'#FFFFFF'
  }
  return dark
}

export const addOpacity = (rgbString, opacity) =>{
  const  r = parseInt(rgbString.slice(1, 3), 16)
  const  g = parseInt(rgbString.slice(3, 5), 16)
  const b = parseInt(rgbString.slice(5, 7), 16)
  if (opacity) 
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  else 
    return `rgb(${r}, ${g}, ${b})`
}

export const isBrowser = typeof window === 'object'

export function ucFirst (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function singularise(string) {
  const last = string.slice(string.length-1)
  if (last == 's') return string.substring(0, string.length-1)
  return string
}
export function toArray(obj) {
  return Object.keys(obj).map(key => obj[key])
}

export const randomHex = () => {
  const ColorCode = `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${0.6})`
  return ColorCode
}
// generate first letter of a string
export const firstLetterOfString = (str) => {
  if (typeof str === 'string') return str.charAt(0).toUpperCase()
  console.log("firstLetterOfString wasn't passed a string:", str)
  return ''
}

export const generateRandomID = () => //function to generate a random number , currently being for ID's for chapter,section,columns and questionsgroups json generating
{
  function chr4 () {
    return Math.random().toString(16).slice(-4)
  }
  return `${chr4() + chr4()
  }-${chr4()
  }-${chr4()
  }-${chr4()
  }-${chr4()}${chr4()}${chr4()}`
}

// Predefining one column in each section, since we are currently placing all questiongroups in column itself.
export const staticChapterStructure = () => {
  const ob = {
    id: generateRandomID(),
    title: '',
    icon: '',
    color: '',
    sections: [
      { id: generateRandomID(),
        title: '',
        columns: [
          {
            id: generateRandomID(),
            questionGroups: []
          }
        ]
      }]
  }
  return ob
}

export const ColumnsOfThree = (data) => {
  const gridData = [[]]
  const totalColumns = 3
  let countColumns = 1
  const length = data.length
  data.map((column, key) => {
    gridData[gridData.length - 1].push(column)
    if (countColumns <= totalColumns)
      countColumns++

    if (countColumns > totalColumns && key !== length - 1) {
      countColumns = 1
      gridData.push([])
    }
  })
  return gridData
}

// Below logic returns the template in Proper structure having IDs for each Component - used by Template View/Edit by re-using chaptercreation Component.
export const generateTemplateForView = (template, questiongroup) =>{
  let modifiedChapters = []
  if(template.chapters) 
    modifiedChapters = template.chapters.map((chapter) => {
      const modifiedSections = chapter.sections.map(sec => {
        const modifiedColumns = sec.columns.map(col => {
          const temporaryColumn = []
          col.map(co => {
            temporaryColumn.push(co)
          })
          return { id: generateRandomID(), questionGroups: temporaryColumn.map(tem => { return questiongroup[tem] }) }
        })
        return Object.assign({}, sec, {
          columns: modifiedColumns
        })
      })
      return Object.assign({}, chapter, {
        sections: modifiedSections
      })
    })
  

  return Object.assign({}, template, { chapters: modifiedChapters })
}

// function to modify the sections array into required sections format. sections :[{columns :[[]]}] , used in template creation
export const modifySections = (sections) => {
  let modifiedSections = []
  if(sections) 
    modifiedSections = sections.map(sec => {
      const test2 = sec.columns.map(col => {
        return col.questionGroups.map(qG => {
          return qG._id
        })
      })
      return {
        id: sec.id,
        title: sec.title,
        columns: test2
      }
    })
  
  console.log('Modified Section',modifiedSections)
  return modifiedSections
}

export const isChapterModified = (chapters, editingChapter) => {

  console.log(chapters,editingChapter)
  let matchedChapter = null
  const chapter =  chapters.map(chap => {
    if(chap.id === editingChapter.id) 
      matchedChapter = chap
  }) 
  if(matchedChapter === editingChapter) {
    console.log('Chapter matched, no changes ',matchedChapter,editingChapter)
    return false
  }
  if(matchedChapter === null) {
    console.log('Current Chapter is no yet added in chapters, so nothing got matched-----')
    return false
  }
  else{
    console.log('Changes found')
    return true
  }
}

//Used in Questiongroup builder to modifiy the last questiongroup object questions with answers and common answers - required with only IDS of and not with object of answer and commonAnswer
export const questionGroupQuestionsModification = (initialQuestionGroup) =>{
  return initialQuestionGroup.questions.map(qu =>{
    if(qu.answers ) {
      const newAnswers = qu.answers.map(answer =>{
        return answer._id
      })
      qu.answers =  newAnswers
      // Object.assign({}, qu, {
      //   answers: newAnswers
      // })
    }
    if(qu.commonAnswers) {
      const newCommonAnswers = qu.commonAnswers.map(commonAnswer =>{
        return commonAnswer._id
      })
      qu.commonAnswers = newCommonAnswers
      // Object.assign({}, qu, {
      //   commonAnswers: newCommonAnswers
      // })
    }
    return qu
  })
} 

//Used by the QuestionGroup View page to get objects from id's of answers and commonAnswers in the question
export const getObjectFromIds = (newQuestionGroup,answers) =>{
  return newQuestionGroup.questions.map(ques =>{
    if(ques.answers) 
      ques.answers = answers.filter((answer) => {
        return ques.answers.some((ans) => answer._id === ans  )
      })
    if(ques.commonAnswers)
      ques.commonAnswers = answers.filter((answer) => {
        return ques.commonAnswers.some((ans) => answer._id === ans  )
      })
    return ques
  })

}
