import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonBlue } from '../src'

export default {
    title: 'Components/ButtonBlue',
    component: ButtonBlue
} as ComponentMeta<typeof ButtonBlue>

const TemplateLarge: ComponentStory<typeof ButtonBlue> = (props) => <ButtonBlue label='large' size='large' {...props} />


export const ButtonBlueVariants = TemplateLarge.bind({})