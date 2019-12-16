import React, { Fragment } from 'react'
// import { withKnobs, text, select } from '@storybook/addon-knobs'

import Container from '../components/layout/container/Container'

export default {
  title: 'Layout',
  // decorators: [withKnobs],
}

export const container = () => (
  <Fragment>
    <Container fullVertical>Test</Container>
    <Container small>Test2</Container>
    <Container paddingBottom={10}>Test2</Container>
    <Container paddingBottom={11}>Test2</Container>
    <Container paddingBottom={10}>Test2</Container>
    <Container paddingBottom={13}>Test2</Container>
    <Container paddingBottom={10}>Test2</Container>
    <Container paddingBottom={10}>Test2</Container>
    <Container paddingBottom={17}>Test2</Container>
    <Container paddingBottom={10}>Test2</Container>
  </Fragment>
)
export const container2 = () => <Container full small />
