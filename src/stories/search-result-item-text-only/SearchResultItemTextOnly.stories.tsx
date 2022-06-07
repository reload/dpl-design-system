import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultItemTextOnly } from "./SearchResultItemTextOnly";

export default {
  title: "Components / Search Result Item Text Only",
  component: SearchResultItemTextOnly,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4517%3A17622",
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue:
        "Game of thrones. Disc 1, episodes 1-3 (Sæson 7) og lorem ipsum lorem ipsum lorem ipsum",
    },
    author: {
      control: { type: "text" },
      defaultValue: "David Benioff, D. B. Weiss",
    },
    year: {
      control: { type: "text" },
      defaultValue: "2017",
    },
  },
} as ComponentMeta<typeof SearchResultItemTextOnly>;

const Template: ComponentStory<typeof SearchResultItemTextOnly> = (args) => {
  return <SearchResultItemTextOnly {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
