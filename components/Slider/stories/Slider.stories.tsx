import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Slider from "../Slider";

export default {
  title: "Components/Slider(Unstable)",
  component: Slider,
  parameters: {
    componentSubtitle: "Test",
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});

export const Disabled: ComponentStory<typeof Slider> = Template.bind({});

Disabled.args = {
  disabled: true,
  defaultValue: 30,
};

export const SmallSlider: ComponentStory<typeof Slider> = Template.bind({});
SmallSlider.args = {
  defaultValue: 30,
  size: "sm",
};

export const SmallSliderDisabled: ComponentStory<typeof Slider> = Template.bind(
  {}
);
SmallSliderDisabled.args = {
  defaultValue: 30,
  size: "sm",
  disabled: true,
};
