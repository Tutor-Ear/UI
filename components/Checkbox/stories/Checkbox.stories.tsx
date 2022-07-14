import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { HStack, VStack } from "@tutor-ear/ui/layouts";
import * as React from "react";

import Checkbox from "../Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    componentSubtitle: "체크!",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});

export const State: ComponentStory<typeof Checkbox> = () => (
  <HStack>
    <Checkbox id="checkbox-1" checked value="1" name="1" />
    <Checkbox id="checkbox-2" value="2" name="2" />
    <Checkbox id="checkbox-3" disabled checked value="3" name="3" />
    <Checkbox id="checkbox-4" disabled value="4" name="4" />
  </HStack>
);

export const withLabel: ComponentStory<typeof Checkbox> = () => (
  <VStack>
    <Checkbox label="Female" id="checkbox-5" value="" name="" />
    <Checkbox label="Male" id="checkbox-6" disabled value="" name="" />
  </VStack>
);

export const withHelperText: ComponentStory<typeof Checkbox> = () => (
  <Checkbox
    helperText="For orders shipped from $25 in books or $29 in other categories"
    label="Free shipping via S"
    value=""
    name=""
    id="checkbox-7"
  />
);
