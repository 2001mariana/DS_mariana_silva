import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonRainbow } from '../src'

export default {
    title: 'Components/ButtonRainbow',
    component: ButtonRainbow
} as ComponentMeta<typeof ButtonRainbow>

const TemplateLed: ComponentStory<typeof ButtonRainbow> = (props) => <ButtonRainbow label='led' size='large' {...props} />

export const ButtonRainbowVariants = TemplateLed.bind({})