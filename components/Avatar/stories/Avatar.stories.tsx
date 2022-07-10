import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HStack } from "@tutor-ear/ui/layouts";
import * as React from "react";

import Avatar, { AvatarStack } from "../Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  /*
   * More on Storybook argTypes at:
   * https://storybook.js.org/docs/react/api/argtypes
   */
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "sm", "md", "xl"],
    },
  },
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar
    imgSrc="https://avatars.githubusercontent.com/u/51485489?s=400&u=390db08ff409e9e53fff1165fba7d97651e3f107&v=4"
    {...args}
  />
);

export const Default = Template.bind({});

export const Sizes: ComponentStory<typeof Avatar> = (args) => (
  <HStack>
    <Avatar {...args} size="xs" />
    <Avatar {...args} size="sm" />
    <Avatar {...args} size="md" />
    <Avatar {...args} size="xl" />
  </HStack>
);

/*
 * More on component Storybook args at
 * https://storybook.js.org/docs/react/writing-stories/args#story-args
 */
Sizes.args = {
  imgSrc:
    "https://avatars.githubusercontent.com/u/51485489?s=400&u=390db08ff409e9e53fff1165fba7d97651e3f107&v=4",
};

/*
 * More on component Storybook parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#story-parameters
 */
Sizes.parameters = {
  docs: {
    storyDescription: "4 sizes are supported. You can adjust by `size` props.",
  },
};

export const NoImage = Template.bind({});

NoImage.args = {
  imgSrc: undefined,
  altLabel: "LK",
};

NoImage.parameters = {
  docs: {
    storyDescription: "!",
  },
};

export const StackedAvatars: ComponentStory<typeof Avatar> = (args) => (
  <HStack>
    <AvatarStack>
      <Avatar
        hasBorder
        imgSrc="https://avatars.githubusercontent.com/u/51485489?s=400&u=390db08ff409e9e53fff1165fba7d97651e3f107&v=4"
        altLabel=""
      />
      <Avatar
        hasBorder
        imgSrc="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        altLabel=""
      />
      <Avatar
        hasBorder
        imgSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        altLabel=""
      />
      <Avatar
        hasBorder
        imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        altLabel=""
      />
    </AvatarStack>
    <AvatarStack hasMore={30}>
      <Avatar
        hasBorder
        imgSrc="https://avatars.githubusercontent.com/u/51485489?s=400&u=390db08ff409e9e53fff1165fba7d97651e3f107&v=4"
        altLabel=""
      />
      <Avatar
        hasBorder
        imgSrc="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        altLabel=""
      />
      <Avatar
        hasBorder
        imgSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        altLabel=""
      />
      <Avatar
        hasBorder
        imgSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        altLabel=""
      />
    </AvatarStack>
  </HStack>
);

StackedAvatars.parameters = {
  docs: {
    storyDescription: "!",
  },
};

export const WithDots: ComponentStory<typeof Avatar> = (args) => (
  <HStack>
    <Avatar
      hasDotIndicator
      isOnline
      imgSrc="https://avatars.githubusercontent.com/u/51485489?s=400&u=390db08ff409e9e53fff1165fba7d97651e3f107&v=4"
      altLabel=""
    />
    <Avatar
      hasDotIndicator
      imgSrc="https://avatars.githubusercontent.com/u/51485489?s=400&u=390db08ff409e9e53fff1165fba7d97651e3f107&v=4"
      altLabel=""
    />
    <Avatar
      hasDotIndicator
      pingEffect
      isOnline
      imgSrc="https://avatars.githubusercontent.com/u/51485489?s=400&u=390db08ff409e9e53fff1165fba7d97651e3f107&v=4"
      altLabel=""
    />
    <Avatar
      hasDotIndicator
      pingEffect
      imgSrc="https://avatars.githubusercontent.com/u/51485489?s=400&u=390db08ff409e9e53fff1165fba7d97651e3f107&v=4"
      altLabel=""
    />
  </HStack>
);

WithDots.parameters = {
  docs: {
    storyDescription: "!",
  },
};
