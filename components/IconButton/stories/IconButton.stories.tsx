import { PlusIcon } from "@heroicons/react/outline";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HStack } from "@tutor-ear/ui/layouts";
import * as React from "react";

import IconButton from "../IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    componentSubtitle: "버튼은 버튼인데 아이콘만 있는 버튼",
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = () => (
  <IconButton icon={PlusIcon} />
);

export const Default = Template.bind({});

const IconButtonGroupTemplate: ComponentStory<typeof IconButton> = (args) => (
  <HStack>
    <IconButton {...args} variant="sharp" icon={PlusIcon} />
    <IconButton {...args} variant="rounded" icon={PlusIcon} />
    <IconButton {...args} variant="circle" icon={PlusIcon} />
  </HStack>
);

const IconButtonGroupSizeTemplate: ComponentStory<typeof IconButton> = (
  args
) => (
  <HStack align="center">
    <IconButton {...args} size="xs" icon={PlusIcon} />
    <IconButton {...args} size="sm" icon={PlusIcon} />
    <IconButton {...args} size="md" icon={PlusIcon} />
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
