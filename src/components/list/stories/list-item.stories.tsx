import { DCard } from 'components/card';

import { Meta, Story } from '@storybook/react';

import { DListItem } from '../';
import { IListItem, listItemVariant } from '../types';

export default {
  title: "Components/List",
  component: DListItem,
  subcomponents: { DCard },
  argTypes: {
    variant: { options: [...listItemVariant], control: "select" },
  },
} as Meta;

const Template: Story<IListItem> = (args) => (
  <DCard>
    <DListItem {...args}>List item</DListItem>
  </DCard>
);

export const Default = Template.bind({});
Default.args = {
  variant: "none",
  rounded: false,
};

export const Button = Template.bind({});
Button.args = {
  variant: "button",
  onClick: () => alert("Click!"),
  rounded: true,
};

export const Active = Template.bind({});
Active.args = {
  variant: "button",
  onClick: () => alert("Click!"),
  border: "left",
};
