import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultItemOneRow } from "./SearchResultItemOneRow";

export default {
  title: "Components / Search Result Item One Row",
  component: SearchResultItemOneRow,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4517%3A16671",
    },
  },
  argTypes: {
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
  },
} as ComponentMeta<typeof SearchResultItemOneRow>;

const Template: ComponentStory<typeof SearchResultItemOneRow> = (args) => {
  return <SearchResultItemOneRow {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
