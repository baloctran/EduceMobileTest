
export const ComputeMatrixValues = (outputQuestiongroup, questiongroups,instances,questions, responses, indicator ) => {
  const allresponses = outputQuestiongroup.questions.map((question) => {
    return instances.map((instance) => {
      response = responses[instance.questions[question.id]]
      return response
    })
  })
  const responsesss = allresponses.map((currentResponse) => {
    return currentResponse[0]
  })
  console.log(responsesss)
  const withIndicator = responsesss.map((res, rKey) => {
    indicator.map((indi, iKey) => {
      if (rKey === iKey)
        res.indicator = indi
    })
    return res
  })
  console.log(withIndicator)
  return withIndicator
}
