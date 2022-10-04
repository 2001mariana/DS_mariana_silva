import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonLed } from '../src'

export default {
    title: 'Components/ButtonLed',
    component: ButtonLed
} as ComponentMeta<typeof ButtonLed>

const TemplateLed: ComponentStory<typeof ButtonLed> = (props) => <ButtonLed label='led' size='large' {...props} />

export const ButtonLedVariants = TemplateLed.bind({})