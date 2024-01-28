import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";
import Radio from "../../components/radio/Radio.vue";
import Select from "../../components/select/Select.vue";
import AutoComplete from "../../components/autocomplete/AutoComplete.vue";
import DatePicker from "../../components/datepicker/DatePicker.vue";

const meta = {
  title: 'Input/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }, // default value
  parameters: {
  }
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  args: {
  
  },

};