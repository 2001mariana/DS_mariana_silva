import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ButtonDanger } from '../src'

export default {
    title: 'Components/ButtonDanger',
    component: ButtonDanger
} as ComponentMeta<typeof ButtonDanger>

const TemplateLarge: ComponentStory<typeof ButtonDanger> = (props) => <ButtonDanger label='danger' {...props} />


export const ButtonDangerVariants = TemplateLarge.bind({})