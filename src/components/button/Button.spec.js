import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
// import App, { Counter, dataReducer } from './App';
import Button from './Button'

describe('hoy', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Button label='Hello' />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
