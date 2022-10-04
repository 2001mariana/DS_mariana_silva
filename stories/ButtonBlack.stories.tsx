import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonBlack } from '../src'

export default {
    title: 'Components/ButtonBlack',
    component: ButtonBlack
} as ComponentMeta<typeof ButtonBlack>

const TemplateLarge: ComponentStory<typeof ButtonBlack> = (props) => <ButtonBlack label='large' size='large' {...props} />


export const ButtonBlackVariants = TemplateLarge.bind({})