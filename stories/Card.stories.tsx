
import React from 'react';
import { ComponentMeta } from '@storybook/react'
import { Card } from '../src/components/Card'

export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardComponent = () => {
    return (<Card>
        <h1>This is Card component example</h1>
    </Card>)
}