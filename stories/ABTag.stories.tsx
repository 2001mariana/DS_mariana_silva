import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from "react";

import { ABTag, ABTagProps } from '../src/components/Tag';

export default {
    title: 'Components/ABTag',
    component: ABTag
} as ComponentMeta<typeof ABTag>

const Template: ComponentStory<typeof ABTag> = (args) => <ABTag {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Tag'
} as ABTagProps