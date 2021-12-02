import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { StoryPlaceholder } from "../story-placeholder/StoryPlaceholder";
import { addMissingLabel } from "../story-placeholder/tools";

export default {
  title: addMissingLabel("Components / Modals"),
  component: StoryPlaceholder,
  decorators: [withDesign],
  argTypes: {
    name: {
      defaultValue: '"Modal with details"',
    }
  },
  parameters: {},
} as ComponentMeta<typeof StoryPlaceholder>;

export const ModalDetails: ComponentStory<typeof StoryPlaceholder> = StoryPlaceholder.bind({});
ModalDetails.storyName = addMissingLabel("Details");
