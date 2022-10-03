import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInputQuant, AbInputQuantProps } from '../src'

export default {
  title: 'components/AbInputQuant',
  component: AbInputQuant,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputQuant>;

const Template: ComponentStory<typeof AbInputQuant> = (args) => <AbInputQuant {...args} />;

export const AbInputQuantComponent = Template.bind({})
AbInputQuantComponent.args = {
    label: 'Uma label do InputQuant'
} as AbInputQuantProps