import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonPink } from '../src'

export default {
    title: 'Components/ButtonPink',
    component: ButtonPink
} as ComponentMeta<typeof ButtonPink>

const TemplateLarge: ComponentStory<typeof ButtonPink> = (props) => <ButtonPink label='large' size='large' {...props} />


export const ButtonPinkVariants = TemplateLarge.bind({})