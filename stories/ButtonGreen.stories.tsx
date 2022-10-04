import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonGreen } from '../src'

export default {
    title: 'Components/ButtonGreen',
    component: ButtonGreen
} as ComponentMeta<typeof ButtonGreen>

const TemplateLarge: ComponentStory<typeof ButtonGreen> = (props) => <ButtonGreen label='large' size='large' {...props} />


export const ButtonGreenVariants = TemplateLarge.bind({})