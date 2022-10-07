import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonYellowLed } from '../src'

export default {
    title: 'Components/ButtonYellowLed',
    component: ButtonYellowLed
} as ComponentMeta<typeof ButtonYellowLed>

const TemplateLight: ComponentStory<typeof ButtonYellowLed> = (props) => <ButtonYellowLed label='large' size='large' intensity='light' {...props} />

export const ButtonYellowLedLight = TemplateLight.bind({})