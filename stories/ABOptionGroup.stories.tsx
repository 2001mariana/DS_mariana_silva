import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react"

import { ABOptionGroup } from '../src'

export default {
    title: 'Components/ABOptionGroup',
    component: ABOptionGroup
} as ComponentMeta<typeof ABOptionGroup>

const TemplatePrimary: ComponentStory<typeof ABOptionGroup> = (props) => 
    <ABOptionGroup options={optionDefault} valueDefault={optionDefault[0]} />

export const ABPrimary = TemplatePrimary.bind({})

const optionDefault = [
                        {id: 1, title:'E-book', body: 'R$ 00,00', footer: '.pff, ...'},
                        {id: 2, title:' Impresso', body: 'R$ 00,00', footer: '.pff, ...'},
                        {id: 3, title:'E-book + Impresso', body: 'R$ 00,00', footer: '.pff, ...'},
                    ]