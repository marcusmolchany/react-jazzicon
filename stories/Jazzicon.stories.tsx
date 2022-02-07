import { ComponentStory, ComponentMeta } from "@storybook/react";

import Jazzicon from "../src";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Jazzicon",
  component: Jazzicon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    diameter: {
      control: "number",
      defaultValue: 100,
    },
    seed: {
      control: "number",
      defaultValue: "0x1111111111111111111111111111111111111111",
    },
  },
} as ComponentMeta<typeof Jazzicon>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Jazzicon> = (args) => (
//   <Jazzicon {...args} />
// );

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
