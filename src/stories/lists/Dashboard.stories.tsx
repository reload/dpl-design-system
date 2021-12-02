import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { StoryPlaceholder } from "../story-placeholder/StoryPlaceholder";
import { addMissingLabel } from "../story-placeholder/tools";

export default {
  title: addMissingLabel("Components / Lists"),
  component: StoryPlaceholder,
  decorators: [withDesign],
  argTypes: {
    name: {
      defaultValue: '"Dashboard" list',
    }
  },
  parameters: {},
} as ComponentMeta<typeof StoryPlaceholder>;

export const DashboardList: ComponentStory<typeof StoryPlaceholder> = StoryPlaceholder.bind({});
DashboardList.storyName = addMissingLabel("Dashboard");
