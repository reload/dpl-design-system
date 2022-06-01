import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Facet } from "./Facet";

export default {
  title: "Atoms / Facet",
  component: Facet,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=1011%3A15041",
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "Title",
    },
  },
} as ComponentMeta<typeof Facet>;

const Template: ComponentStory<typeof Facet> = (args) => {
  return <Facet {...args} />;
};

export const Item = Template.bind({});
Item.args = {
  title: "EVENTYR",
};

export const Item2 = Template.bind({});
Item2.args = {
  title: "J.K. ROWLING",
};
