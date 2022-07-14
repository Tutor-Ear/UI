import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { HStack } from "../../../layouts/Stack";
import Badge from "../Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    componentSubtitle: "",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args} label="Hello" />
);

export const Default = Template.bind({});

export const AllColors = () => (
  <HStack>
    <Badge color="gray" label="Default" />
    <Badge color="red" label="Red" />
    <Badge color="orange" label="Orange" />
    <Badge color="yellow" label="Yellow" />
    <Badge color="green" label="Green" />
    <Badge color="blue" label="Blue" />
    <Badge color="indigo" label="Indigo" />
    <Badge color="pink" label="Pink" />
    <Badge color="purple" label="Purple" />
  </HStack>
);

export const Size = () => (
  <HStack>
    <Badge color="gray" size="lg" label="Default" />
    <Badge color="red" size="lg" label="Red" />
    <Badge color="orange" size="lg" label="Orange" />
    <Badge color="yellow" size="lg" label="Yellow" />
    <Badge color="green" size="lg" label="Green" />
    <Badge color="blue" size="lg" label="Blue" />
    <Badge color="indigo" size="lg" label="Indigo" />
    <Badge color="pink" size="lg" label="Pink" />
    <Badge color="purple" size="lg" label="Purple" />
  </HStack>
);
