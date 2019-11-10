import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from '../components/button'

export default {
  title: 'UI/Button',
  decorators: [withKnobs],
}

export const Basic = () => <Button label={text('Label', 'Button')} />
export const Primary = () => (
  <Button label={text('Label', 'Button')} type='primary' />
)
