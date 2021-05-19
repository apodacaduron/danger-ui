import React from 'react';

import { Meta, Story } from '@storybook/react';

import { DCard } from '../';
import { ICard } from '../types';

export default {
  title: "Components/Card",
  component: DCard,
  argTypes: {
    shadow: { control: "boolean" },
    border: { control: "boolean" },
  },
} as Meta;

const Template: Story<ICard> = (args) => <DCard {...args}>Card</DCard>;

export const Default = Template.bind({});
Default.args = {
  shadow: false,
  border: false,
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
  border: false,
};

export const Border = Template.bind({});
Border.args = {
  shadow: false,
  border: true,
};
