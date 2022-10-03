import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import ButtonDanger from '../src/components/ButtonDanger'

export default {
    title: 'Components/ButtonDanger',
    component: ButtonDanger
} as ComponentMeta<typeof ButtonDanger>

const TemplateLarge: ComponentStory<typeof ButtonDanger> = (props) => <ButtonDanger label='large' size='large' {...props} />


export const ButtonDangerVariants = TemplateLarge.bind({})