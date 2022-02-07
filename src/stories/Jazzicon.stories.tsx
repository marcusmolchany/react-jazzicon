import { ComponentStory, ComponentMeta } from "@storybook/react";

import Jazzicon, { jsNumberForAddress } from "..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Jazzicon",
  component: Jazzicon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    diameter: {
      control: "number",
    },
    seed: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Jazzicon>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Jazzicon> = (args) => (
  <Jazzicon {...args} seed={jsNumberForAddress(`${args.seed}`)} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  diameter: 100,
  seed: "0x1111111111111111111111111111111111111111",
};
