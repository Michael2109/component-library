import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";
import Radio from "../../components/radio/Radio.vue";
import Select from "../../components/select/Select.vue";
import Switch from "../../components/switch/Switch.vue";

const meta = {
  title: 'Input/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }, // default value
  parameters: {
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  args: {
  
  },

};