import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";
import Input from "../../components/input/Input.vue";
import Chip from "../../components/chip/Chip.vue";
import MultiSelect from "../../components/multiselect/MultiSelect.vue";

const meta = {
  title: 'Input/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
  }, // default value
  parameters: {

  }
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  args: {
  },

};