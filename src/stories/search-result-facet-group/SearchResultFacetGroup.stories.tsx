import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultFacetGroup } from "./SearchResultFacetGroup";

export default {
  title: "Components / Search Result - FacetGroup",
  component: SearchResultFacetGroup,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=1011%3A15041",
    },
  },
  argTypes: {},
} as ComponentMeta<typeof SearchResultFacetGroup>;

const Template: ComponentStory<typeof SearchResultFacetGroup> = (args) => {
  return <SearchResultFacetGroup {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
