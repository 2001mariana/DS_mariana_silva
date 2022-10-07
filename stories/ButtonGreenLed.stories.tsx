import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonGreenLed } from '../src'

export default {
    title: 'Components/ButtonGreenLed',
    component: ButtonGreenLed
} as ComponentMeta<typeof ButtonGreenLed>

const TemplateLight: ComponentStory<typeof ButtonGreenLed> = (props) => <ButtonGreenLed label='large' size='large' intensity='light' {...props} />

export const ButtonGreenLedLight = TemplateLight.bind({})