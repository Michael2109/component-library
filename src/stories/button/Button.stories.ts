import type { Meta, StoryObj } from '@storybook/vue3';
import Button from "../../components/button/Button.vue";

const meta = {
  title: 'Input/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {  }, // default value
  parameters: {
    slots: {
      default: {
        description: "Content",
        template: `Click me`,
      },
      prepend: {
        description: "Prepended Content",
      },
      append: {
        description: "Appended Content",
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary"
  },

};

export const Text: Story = {
  args: {
    type: "text"
  },
};

export const Large: Story = {
  args: {

  },
};

export const Small: Story = {
  args: {

  },
};
