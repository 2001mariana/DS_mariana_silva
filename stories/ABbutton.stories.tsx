import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ABbutton } from '../src'

export default {
    title: 'Components/ABbutton',
    component: ABbutton
} as ComponentMeta<typeof ABbutton>

const TemplatePrimary: ComponentStory<typeof ABbutton> = (props) => <ABbutton color='Primary' text='Primary' {...props} />

const TemplateSecondary: ComponentStory<typeof ABbutton> = (props) => <ABbutton color='Secondary' text='Secondary' {...props} />

export const ABPrimary = TemplatePrimary.bind({})
export const ABSecondary = TemplateSecondary.bind({})