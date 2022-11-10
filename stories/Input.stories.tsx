import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Input, InputProps } from '../src'

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputComponent = Template.bind({})
InputComponent.args = {
    label: 'Uma label interessante',
} as InputProps