import { PlusIcon } from "@heroicons/react/outline";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HStack } from "@tutor-ear/ui/layouts";
import React from "react";

import IconButton from "../IconButton";

export default {
  title: "Components/IconButton(Unstable)",
  component: IconButton,
  parameters: {
    componentSubtitle: "Test",
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = () => (
  <IconButton>
    <PlusIcon className="w-5 h-5" />
  </IconButton>
);

export const Default = Template.bind({});

const IconButtonGroupTemplate: ComponentStory<typeof IconButton> = (args) => (
  <HStack>
    <IconButton {...args} variant="sharp">
      <PlusIcon className="w-5 h-5" />
    </IconButton>
    <IconButton {...args} variant="rounded">
      <PlusIcon className="w-5 h-5" />
    </IconButton>
    <IconButton {...args} variant="circle">
      <PlusIcon className="w-5 h-5" />
    </IconButton>
  </HStack>
);

const IconButtonGroupSizeTemplate: ComponentStory<typeof IconButton> = (
  args
) => (
  <HStack align="center">
    <IconButton {...args} size="xs">
      <PlusIcon className="w-5 h-5" />
    </IconButton>
    <IconButton {...args} size="sm">
      <PlusIcon className="w-5 h-5" />
    </IconButton>
    <IconButton {...args} size="md">
      <PlusIcon className="w-5 h-5" />
    </IconButton>
  </HStack>
);

export const Variants = IconButtonGroupTemplate.bind({});
export const Ghosts = IconButtonGroupTemplate.bind({});

Ghosts.args = {
  ghost: true,
};

export const Size = IconButtonGroupSizeTemplate.bind({});

export const IconOnly = IconButtonGroupSizeTemplate.bind({});

IconOnly.args = {
  iconOnly: true,
};
