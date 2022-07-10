import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HStack } from "@tutor-ear/ui";
import * as React from "react";

import Radio from "../Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    componentSubtitle: "Radio!",
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});

export const F = () => (
  <HStack>
    <Radio id="s" label="Test" value="s" />
    <Radio id="s2" label="Test2" value="s2" />
  </HStack>
);

export const F2 = () => (
  <div>
    <label className="inline-flex items-center">
      <input type="checkbox" checked />
      <span className="ml-2">Email me news and special offers</span>
    </label>
  </div>
);
