import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonBlueLed } from '../src'

export default {
    title: 'Components/ButtonBlueLed',
    component: ButtonBlueLed
} as ComponentMeta<typeof ButtonBlueLed>

const TemplateLight: ComponentStory<typeof ButtonBlueLed> = (props) => <ButtonBlueLed label='large' size='large' intensity='light' {...props} />

export const ButtonBlueLedLight = TemplateLight.bind({})