import React from 'react'
import SearchAdd from '../index'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const navigation = { state: jest.fn() }

it('renders correctly', () => {
  const tree = renderer.create(<SearchAdd navigation={navigation} />).toJSON()
  expect(tree).toMatchSnapshot()
})
