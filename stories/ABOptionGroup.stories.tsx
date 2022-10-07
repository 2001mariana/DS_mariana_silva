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
    {
      body: 'custom body',
      footer: 'custom description/footer',
      id: 1,
      title: 'custom title'
    },
    {
      body: 'custom body',
      footer: 'custom description/footer',
      id: 2,
      title: ' Imcustom title'
    },
    {
      body: 'custom body',
      footer: 'custom description/footer',
      id: 3,
      title: 'E-book + Imcustom title'
    }
  ]