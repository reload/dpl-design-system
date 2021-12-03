import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MissingStory } from "../missing-story/MissingStory";
import { addMissingLabel } from "../missing-story/tools";

export default {
  title: addMissingLabel("Atoms / Checkbox"),
  component: MissingStory,
  decorators: [withDesign],
  argTypes: {
    name: {
      defaultValue: "Checkbox",
    }
  },
  parameters: {},
} as ComponentMeta<typeof MissingStory>;


export const Default: ComponentStory<typeof MissingStory> = MissingStory.bind({});

