import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";
import Input from "../../components/input/Input.vue";
import Chip from "../../components/chip/Chip.vue";

const meta = {
  title: 'Input/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    label: "Chip"
  }, // default value
  parameters: {

  }
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  args: {
  },

};