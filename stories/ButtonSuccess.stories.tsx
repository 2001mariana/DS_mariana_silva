import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonSuccess } from '../src'

export default {
    title: 'Components/ButtonSuccess',
    component: ButtonSuccess
} as ComponentMeta<typeof ButtonSuccess>

const TemplateLarge: ComponentStory<typeof ButtonSuccess> = (props) => <ButtonSuccess label='large' size='large' {...props} />


export const ButtonSuccessVariants = TemplateLarge.bind({})