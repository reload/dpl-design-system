import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import PromoBar from "./PromoBar";

export default {
  title: "Library / PromoBar",
  component: PromoBar,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=7632%3A29303&t=l9VZsQuEPc9hRg41-4",
    },
  },
  argTypes: {
    text: {
      control: "text",
      defaultValue: "Spring køen over - Materialet findes i en anden udgave",
    },
    type: {
      control: {
        control: { type: "radio" },
        options: ["none", "info"],
      },
    },
    theme: {
      control: {
        control: { type: "radio" },
        options: ["none", "dark"],
      },
    },
    stickToListItem: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof PromoBar>;

const Template: ComponentStory<typeof PromoBar> = (args) => (
  <PromoBar {...args} />
);

export const defaultPromoBar = Template.bind({});
defaultPromoBar.args = {
  type: "info",
  text: "Spring køen over - Materialet findes i en anden udgave",
  stickToListItem: false,
  theme: "none",
};

export const darkThemePromoBar = Template.bind({});
darkThemePromoBar.args = {
  type: "info",
  text: "Spring køen over - Materialet findes i en anden udgave",
  stickToListItem: false,
  theme: "dark",
};
