import React from 'react';

import { Meta, Story } from '@storybook/react';

import { DButton } from '../';
import { buttonVariant, IButton } from '../types';

export default {
  title: "Components/Button",
  component: DButton,
  argTypes: {
    variant: { options: [...buttonVariant], control: "select" },
  },
} as Meta;

const Template: Story<IButton> = (args) => <DButton {...args}>Button</DButton>;

export const Solid = Template.bind({});
Solid.args = {
  variant: "solid",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "icon",
};

export const Flat = Template.bind({});
Flat.args = {
  variant: "flat",
};

export const Round = Template.bind({});
Round.args = {
  variant: "round",
};
