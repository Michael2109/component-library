import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";
import Radio from "../../components/radio/Radio.vue";

const meta = {
  title: 'Input/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {  }, // default value
  parameters: {

  }
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  args: {
    label: "Radio"
  },

};