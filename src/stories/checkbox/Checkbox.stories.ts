import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";

const meta = {
  title: 'Input/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {  }, // default value
  parameters: {

  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  args: {
    label: "Checkbox"
  },

};