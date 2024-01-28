import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";
import Radio from "../../components/radio/Radio.vue";
import Select from "../../components/select/Select.vue";

const meta = {
  title: 'Input/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    options: [
      {title: "Example 1", value: "example1"},
      {title: "Example 2", value: "example2"},
      {title: "Example 3", value: "example3"}
    ]
  }, // default value
  parameters: {
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  args: {
    label: "Radio"
  },

};