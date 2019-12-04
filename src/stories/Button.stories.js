import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Button from '../components/button/Button'

export default {
  title: 'UI',
  decorators: [withKnobs],
}

export const button = () => (
  <Button
    label={text('Label', 'Button')}
    type={select('Type', ['default', 'primary'], 'default')}
  />
)
