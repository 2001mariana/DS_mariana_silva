import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ABInput, InputProps } from '../src'

export default {
  title: 'components/ABInput',
  component: ABInput,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof ABInput>;

const Template: ComponentStory<typeof ABInput> = (args) => <ABInput {...args} />;

export const ABInputComponent = Template.bind({})
ABInputComponent.args = {
    label: 'Uma label interessante',
} as InputProps