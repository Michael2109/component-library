import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";
import Input from "../../components/input/Input.vue";

const meta = {
  title: 'Input/Input',
  component: Input,
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