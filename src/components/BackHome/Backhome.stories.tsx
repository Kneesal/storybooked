import type { Meta, StoryObj } from "@storybook/react";
import BackHome from "./BackHome";

const meta: Meta<typeof BackHome> = {
  title: "FirstBlog/Common/BackHome",
  component: BackHome,
};

export default meta;
type Story = StoryObj<typeof BackHome>;

export const Primary: Story = {
  args: {
    label: "Back to home",
  },
};

export const Secondary: Story = {
  args: {
    label: "Go Back",
  },
};
