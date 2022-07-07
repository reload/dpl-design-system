import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MaterialMainfestationItem } from "./MaterialMainfestationItem";

export default {
  title: "Components / Material Manifestation Item",
  component: MaterialMainfestationItem,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4557%3A15899",
    },
  },
  argTypes: {
    heartFill: {
      control: "boolean",
      defaultValue: false,
    },
    title: {
      control: { type: "text" },
      defaultValue: "Audrey Hepburn",
    },
    author: {
      control: { type: "text" },
      defaultValue: "Sánchez Vegara, Amaia Arrazola",
    },
    year: {
      control: { type: "text" },
      defaultValue: "2018",
    },
    seriesNumber: {
      control: { type: "text" },
      defaultValue: "3",
    },
    series: {
      control: { type: "text" },
      defaultValue: "Små mennesker, store drømme",
    },
  },
} as ComponentMeta<typeof MaterialMainfestationItem>;

const Template: ComponentStory<typeof MaterialMainfestationItem> = (args) => {
  return <MaterialMainfestationItem {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
