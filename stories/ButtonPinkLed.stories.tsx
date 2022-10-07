import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonPinkLed } from '../src'

export default {
    title: 'Components/ButtonPinkLed',
    component: ButtonPinkLed
} as ComponentMeta<typeof ButtonPinkLed>

const TemplateLight: ComponentStory<typeof ButtonPinkLed> = (props) => <ButtonPinkLed label='large' size='large' intensity='light' {...props} />

export const ButtonPinkLedLight = TemplateLight.bind({})