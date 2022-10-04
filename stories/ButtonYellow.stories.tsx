import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonYellow } from '../src'

export default {
    title: 'Components/ButtonYellow',
    component: ButtonYellow
} as ComponentMeta<typeof ButtonYellow>

const TemplateLarge: ComponentStory<typeof ButtonYellow> = (props) => <ButtonYellow label='large' size='large' {...props} />


export const ButtonYellowVariants = TemplateLarge.bind({})