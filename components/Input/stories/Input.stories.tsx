import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Input from "../Input";
import { InputAddon } from "../InputAddon";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const HasLabel = Template.bind({});
HasLabel.args = {
  label: "Password",
  type: "password",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Inputs",
  type: "text",
  disabled: true,
  placeholder: "Disabled Inputs",
};

export const HasHelperText = Template.bind({});
HasHelperText.args = {
  label: "Password",
  type: "password",
  placeholder: "Add Password",
  helperText: (
    <p>
      We’ll never share your details. Read our{" "}
      <a
        href="#"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Privacy Policy
      </a>
      .
    </p>
  ),
};

const MessageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
    />
  </svg>
);

export const HasIcon = Template.bind({});
HasIcon.args = {
  label: "Password",
  type: "password",
  placeholder: "Add Password",
  icon: <MessageIcon />,
};

function isMatch(value: string) {
  return value.length > 8;
}

export const Vaildation = Template.bind({});
Vaildation.args = {
  label: "Password",
  type: "password",
  placeholder: "Add Password",
  vaildationFn: (e) => isMatch(e as string),
  icon: <MessageIcon />,
};

export const VaildationPassed: ComponentStory<typeof Input> = () => (
  <div>
    <Input vaildationPassed id="id" label="ID" type="text" placeholder="ID" />
    <Input
      vaildationPassed={false}
      id="password"
      label="Password"
      type="password"
      placeholder="Password"
    />
  </div>
);

VaildationPassed.parameters = {
  docs: {
    storyDescription:
      "`vaildationPassed` prop을 통해서 검증 통과/실패 여부를 설정할 수 있습니다.",
  },
};

export const withAddon: ComponentStory<typeof Input> = () => (
  <Input id="cash" type="text">
    <InputAddon addon="$" />
  </Input>
);
